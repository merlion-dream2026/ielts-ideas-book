#!/usr/bin/env node
/**
 * extract.js — parse education.html and emit data/education.js
 * Run: node extract.js
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'education.html'), 'utf8');

// ── tiny helpers ──────────────────────────────────────────────────────────────
function unesc(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function innerText(tag, html) {
  // extract text content from first occurrence of <tag...>...</tag>
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = re.exec(html);
  return m ? unesc(m[1].replace(/<[^>]+>/g, '').trim()) : '';
}

function innerHtml(tag, cls, source) {
  const re = new RegExp(`<${tag}[^>]*class="[^"]*${cls}[^"]*"[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = re.exec(source);
  return m ? m[1] : '';
}

function allMatches(pattern, source) {
  const results = [];
  let m;
  const re = new RegExp(pattern, 'gs');
  while ((m = re.exec(source)) !== null) results.push(m);
  return results;
}

// ── extract header badges ─────────────────────────────────────────────────────
const headerSection = /<header class="site-header">([\s\S]*?)<\/header>/.exec(html)[1];
const topic = unesc(/<h1>([\s\S]*?)<\/h1>/.exec(headerSection)[1].trim());
const subtitle = unesc(/<p class="subtitle">([\s\S]*?)<\/p>/.exec(headerSection)[1].trim());
const headerBadges = allMatches(/<span class="badge">([\s\S]*?)<\/span>/, headerSection)
  .map(m => unesc(m[1].trim()));

// ── extract tab bar info ──────────────────────────────────────────────────────
const tabBarHtml = /<div class="tab-bar">([\s\S]*?)<\/div>\s*<\/div>/.exec(html)[1];
const tabBtns = allMatches(/<button class="(tab-btn[^"]*)"[^>]*>([\s\S]*?)<\/button>/, tabBarHtml);
const tabsMeta = tabBtns.map(m => {
  const cls = m[1];
  const inner = m[2];
  const num = unesc(/<span class="tab-num">([\s\S]*?)<\/span>/.exec(inner)[1].trim());
  const name = unesc(/<span class="tab-name">([\s\S]*?)<\/span>/.exec(inner)[1].trim());
  const badge = unesc(/<span class="tab-badge">([\s\S]*?)<\/span>/.exec(inner)[1].trim());
  const coming = /\bcoming\b/.test(cls);
  return { num, name, badge, coming };
});

// ── split into tab panels ─────────────────────────────────────────────────────
function getTabPanel(n) {
  // capture everything between <div id="tab-N" ...> and the next <div id="tab-
  const start = new RegExp(`<div id="tab-${n}" class="tab-panel[^"]*">`);
  const next = n < 20 ? new RegExp(`<div id="tab-${n + 1}" `) : /$/;
  const si = html.search(start);
  if (si === -1) return null;
  const sub = html.slice(si);
  const ei = sub.search(next);
  return ei === -1 ? sub : sub.slice(0, ei);
}

// ── parse a vocab-group ───────────────────────────────────────────────────────
function parseVocabGroup(groupHtml, layout) {
  const group = unesc(/<h3>([\s\S]*?)<\/h3>/.exec(groupHtml)[1].trim());
  const items = [];
  let pos = 0;
  while (true) {
    const start = groupHtml.indexOf('<div class="vocab-item">', pos);
    if (start === -1) break;
    const inner = extractBlockContent(groupHtml.slice(start), '<div class="vocab-item">') || '';
    const phrase = unesc(/<div class="vocab-phrase">([\s\S]*?)<\/div>/.exec(inner)?.[1]?.trim() || '');
    const vn = unesc(/<div class="vocab-vn">([\s\S]*?)<\/div>/.exec(inner)?.[1]?.trim() || '');
    const meaning = unesc(/<div class="vocab-meaning">([\s\S]*?)<\/div>/.exec(inner)?.[1]?.trim() || '');
    const synonyms = unesc(/<div class="vocab-synonyms">([\s\S]*?)<\/div>/.exec(inner)?.[1]?.trim() || '');
    items.push({ phrase, vn, meaning, synonyms });
    // advance past this vocab-item
    let depth = 0, i = start;
    while (i < groupHtml.length) {
      if (groupHtml.startsWith('<div', i)) { depth++; i += 4; }
      else if (groupHtml.startsWith('</div>', i)) { depth--; i += 6; if (depth === 0) break; }
      else i++;
    }
    pos = i;
  }
  return { group, layout, items };
}

// ── parse vocab section ───────────────────────────────────────────────────────
function extractBlockContent(source, openTag) {
  // find openTag in source, return inner content using depth-counting
  const start = source.indexOf(openTag);
  if (start === -1) return null;
  let depth = 0;
  let i = start;
  while (i < source.length) {
    if (source.startsWith('<div', i)) { depth++; i += 4; }
    else if (source.startsWith('</div>', i)) { depth--; i += 6; if (depth === 0) break; }
    else i++;
  }
  // return inner content (between opening and closing tag)
  const innerStart = start + openTag.length;
  return source.slice(innerStart, i - 6); // exclude closing </div>
}

function parseVocab(panelHtml) {
  const vsStart = panelHtml.indexOf('<div class="vocab-section">');
  if (vsStart === -1) return [];
  const vocab = [];

  // pre block: <div style="margin-bottom: 28px;">
  const preTag = '<div style="margin-bottom: 28px;">';
  const preContent = extractBlockContent(panelHtml.slice(vsStart), preTag);
  if (preContent) {
    vocab.push(...extractVocabGroups(preContent, 'pre'));
  }

  // grid block: <div class="vocab-grid">
  const gridTag = '<div class="vocab-grid">';
  const gridContent = extractBlockContent(panelHtml.slice(vsStart), gridTag);
  if (gridContent) {
    vocab.push(...extractVocabGridGroups(gridContent));
  }

  return vocab;
}

function extractVocabGroups(html, defaultLayout) {
  // match each <div class="vocab-group"...>...</div> block
  const result = [];
  let pos = 0;
  while (true) {
    const start = html.indexOf('<div class="vocab-group"', pos);
    if (start === -1) break;
    // find closing </div> accounting for nesting
    let depth = 0;
    let i = start;
    while (i < html.length) {
      if (html.startsWith('<div', i)) { depth++; i += 4; }
      else if (html.startsWith('</div>', i)) { depth--; i += 6; if (depth === 0) break; }
      else i++;
    }
    const groupHtml = html.slice(start, i);
    result.push(parseVocabGroup(groupHtml, defaultLayout));
    pos = i;
  }
  return result;
}

function extractVocabGridGroups(gridHtml) {
  const result = [];
  let pos = 0;
  const re = /<div class="vocab-group"([^>]*)>/g;
  let m;
  while ((m = re.exec(gridHtml)) !== null) {
    const styleAttr = m[1];
    let layout = 'half';
    if (styleAttr && /grid-column:\s*1\s*\/\s*-1/.test(styleAttr)) layout = 'span';

    const start = m.index;
    let depth = 0;
    let i = start;
    while (i < gridHtml.length) {
      if (gridHtml.startsWith('<div', i)) { depth++; i += 4; }
      else if (gridHtml.startsWith('</div>', i)) { depth--; i += 6; if (depth === 0) break; }
      else i++;
    }
    const groupHtml = gridHtml.slice(start, i);
    result.push(parseVocabGroup(groupHtml, layout));
    re.lastIndex = i;
  }
  return result;
}

// ── parse an idea card ────────────────────────────────────────────────────────
function parseIdeaCard(cardHtml) {
  const titleMatch = /<div class="idea-title"><span class="idea-num">\d+<\/span>([\s\S]*?)<\/div>/.exec(cardHtml);
  const title = titleMatch ? unesc(titleMatch[1].trim()) : '';

  const flowMatch = /<div class="idea-flow">([\s\S]*?)<\/div>/.exec(cardHtml);
  let flow = '';
  if (flowMatch) {
    // convert <span class="arrow">→</span> back to →
    flow = unesc(flowMatch[1].replace(/<span class="arrow">→<\/span>/g, '→').replace(/<[^>]+>/g, '').trim());
  }

  const examples = [];
  // ex-items have no nested divs — simple single-tag match works
  const exMatches = allMatches(/<div class="ex-item">([\s\S]*?)<\/div>/, cardHtml);
  for (const ex of exMatches) {
    const inner = ex[1];
    const text = unesc(/<span class="ex-text">([\s\S]*?)<\/span>/.exec(inner)?.[1]?.trim() || '');
    if (inner.includes('ex-flag')) {
      examples.push({ type: 'vn', text });
    } else if (inner.includes('contrast')) {
      examples.push({ type: 'contrast', text });
    } else {
      examples.push({ type: 'support', text });
    }
  }

  return { title, flow, examples };
}

// ── parse a side ──────────────────────────────────────────────────────────────
function parseSide(sideHtml) {
  const labelMatch = /<h3>([\s\S]*?)<\/h3>/.exec(sideHtml);
  const label = labelMatch ? unesc(labelMatch[1].trim()) : '';

  const ideas = [];
  let pos = 0;
  while (true) {
    const start = sideHtml.indexOf('<div class="idea-card">', pos);
    if (start === -1) break;
    let depth = 0;
    let i = start;
    while (i < sideHtml.length) {
      if (sideHtml.startsWith('<div', i)) { depth++; i += 4; }
      else if (sideHtml.startsWith('</div>', i)) { depth--; i += 6; if (depth === 0) break; }
      else i++;
    }
    ideas.push(parseIdeaCard(sideHtml.slice(start, i)));
    pos = i;
  }

  return { label, ideas };
}

// ── parse a question block ────────────────────────────────────────────────────
function parseQuestionBlock(blockHtml) {
  // Use depth-counting to extract question-block-header (contains nested divs)
  const headerTag = '<div class="question-block-header">';
  const headerContent = extractBlockContent(blockHtml, headerTag) || '';
  let qText = '', source = '';
  if (headerContent) {
    // q-label: no nested divs, simple match works
    const qLabel = unesc(/<div class="q-label">([\s\S]*?)<\/div>/.exec(headerContent)?.[1] || '');
    // source from q-label: "Question N of M · Source"
    const srcMatch = /·\s*(.+)$/.exec(qLabel);
    if (srcMatch) source = srcMatch[1].trim();
    qText = unesc(/<p>([\s\S]*?)<\/p>/.exec(headerContent)?.[1]?.trim() || '');
  }

  // find sides-grid
  const sgMatch = /<div class="sides-grid">([\s\S]*?)<\/div>\s*<\/div>\s*$/.exec(blockHtml);
  if (!sgMatch) return { qText, source, sideA: { label: '', ideas: [] }, sideB: { label: '', ideas: [] } };
  const sgHtml = sgMatch[1];

  // find side-a and side-b
  const sideAStart = sgHtml.indexOf('<div class="side side-a">');
  const sideBStart = sgHtml.indexOf('<div class="side side-b">');

  const sideAHtml = sgHtml.slice(sideAStart, sideBStart);
  const sideBHtml = sgHtml.slice(sideBStart);

  return {
    qText,
    source,
    sideA: parseSide(sideAHtml),
    sideB: parseSide(sideBHtml),
  };
}

// ── parse full tab panel ──────────────────────────────────────────────────────
function parseTabPanel(panelHtml, meta) {
  if (meta.coming) {
    // extract fullName from coming-soon h3
    const fnMatch = /<h3>([\s\S]*?)<\/h3>/.exec(panelHtml);
    return {
      ...meta,
      fullName: fnMatch ? unesc(fnMatch[1].trim()) : meta.name,
    };
  }

  // panel header
  const phMatch = /<div class="panel-header">([\s\S]*?)<\/div>\s*<div class="section-label">/.exec(panelHtml);
  let fullName = meta.name, desc = '', panelBadges = [];
  if (phMatch) {
    const ph = phMatch[1];
    const h2 = /<h2>([\s\S]*?)<\/h2>/.exec(ph);
    if (h2) fullName = unesc(h2[1].trim());
    const p = /<p>([\s\S]*?)<\/p>/.exec(ph);
    if (p) desc = unesc(p[1].trim());
    panelBadges = allMatches(/<span class="badge">([\s\S]*?)<\/span>/, ph)
      .map(m => unesc(m[1].trim()));
  }

  // questions box items — use depth-counting to get full question-item HTML
  const qboxStart = panelHtml.indexOf('<div class="questions-box">');
  const questions = [];
  if (qboxStart !== -1) {
    const qboxContent = extractBlockContent(panelHtml.slice(qboxStart), '<div class="questions-box">') || '';
    let pos = 0;
    while (true) {
      const itemStart = qboxContent.indexOf('<div class="question-item">', pos);
      if (itemStart === -1) break;
      const itemContent = extractBlockContent(qboxContent.slice(itemStart), '<div class="question-item">') || '';
      const textMatch = /<div class="q-text">([\s\S]*?)<\/div>/.exec(itemContent);
      if (textMatch) {
        const rawText = textMatch[1];
        const sourceMatch = /<span class="q-source">\(([^)]+)\)<\/span>/.exec(rawText);
        const src = sourceMatch ? unesc(sourceMatch[1]) : '';
        const text = unesc(rawText.replace(/<span class="q-source">[\s\S]*?<\/span>/, '').replace(/<[^>]+>/g, '').trim());
        questions.push({ text, ...(src ? { source: src } : {}) });
      }
      // advance past this question-item
      let depth = 0, i = itemStart;
      while (i < qboxContent.length) {
        if (qboxContent.startsWith('<div', i)) { depth++; i += 4; }
        else if (qboxContent.startsWith('</div>', i)) { depth--; i += 6; if (depth === 0) break; }
        else i++;
      }
      pos = i;
    }
  }

  // idea/question blocks
  const ideas = [];
  let pos = 0;
  while (true) {
    const start = panelHtml.indexOf('<div class="question-block">', pos);
    if (start === -1) break;
    // find end of question-block (nested divs)
    let depth = 0;
    let i = start;
    while (i < panelHtml.length) {
      if (panelHtml.startsWith('<div', i)) { depth++; i += 4; }
      else if (panelHtml.startsWith('</div>', i)) { depth--; i += 6; if (depth === 0) break; }
      else i++;
    }
    ideas.push(parseQuestionBlock(panelHtml.slice(start, i)));
    pos = i;
  }

  // vocab
  const vocab = parseVocab(panelHtml);

  return { ...meta, fullName, desc, panelBadges, questions, ideas, vocab };
}

// ── main ──────────────────────────────────────────────────────────────────────
const tabs = tabsMeta.map((meta, i) => {
  const panelHtml = getTabPanel(i + 1);
  if (!panelHtml) return meta;
  return parseTabPanel(panelHtml, meta);
});

const topicData = {
  topic,
  subtitle,
  badges: headerBadges,
  tabs,
};

const output = `/* data/education.js — auto-generated by extract.js */
window.TOPIC_DATA = ${JSON.stringify(topicData, null, 2)};
`;

const outPath = path.join(__dirname, 'data', 'education.js');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, output, 'utf8');
console.log(`Written: ${outPath} (${Math.round(output.length / 1024)}KB)`);
console.log(`Tabs: ${tabs.length}`);
tabs.forEach((t, i) => {
  if (t.coming) {
    console.log(`  Tab ${i+1}: ${t.name} [coming soon]`);
  } else {
    console.log(`  Tab ${i+1}: ${t.fullName} — ${t.ideas?.length || 0} question blocks, ${t.vocab?.length || 0} vocab groups`);
  }
});
