/* ── IELTS Ideas Book — Renderer ── */
/* Reads window.TOPIC_DATA and builds the full page DOM */

(function () {
  const D = window.TOPIC_DATA;
  if (!D) { document.body.innerHTML = '<p style="padding:40px;color:red">Error: TOPIC_DATA not loaded.</p>'; return; }

  /* Topic name -> theme class suffix (matches the accent/bg/badge-* utilities in styles.css) */
  const TOPIC_THEME = {
    'Education': 'edu',
    'Technology': 'tech',
    'Environment & Climate': 'env',
    'Health & Medicine': 'health',
    'Society & Culture': 'society',
    'Work & Economy': 'work',
    'Family & Relationships': 'family',
    'Media & Communication': 'media',
    'Crime & Law': 'crime',
    'Urbanisation & Housing': 'urban',
    'Sports & Leisure': 'sports',
    'Transport': 'transport',
    'Government & Policy': 'govt',
  };
  const theme = TOPIC_THEME[D.topic] || 'edu';

  /* ── Helpers ── */
  function esc(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function flow(text) {
    return text.split('→').map((part, i) =>
      i > 0 ? `<span class="arrow">→</span>${esc(part)}` : esc(part)
    ).join('');
  }

  function badges(arr, cls) {
    return arr.map(b => `<span class="badge${cls ? ' ' + cls : ''}">${esc(b)}</span>`).join('');
  }

  /* ── Header ── */
  function renderHeader() {
    return `
<header class="site-header theme-${theme}">
  <div class="breadcrumb">Ideas Book for IELTS Essay <span>›</span> Topic: ${esc(D.topic)}</div>
  <h1>${esc(D.topic)}</h1>
  <p class="subtitle">${esc(D.subtitle)}</p>
  <div class="badge-row">${badges(D.badges)}</div>
</header>`;
  }

  /* ── Tab Bar ── */
  function renderTabBar() {
    const btns = D.tabs.map((t, i) => {
      const cls = ['tab-btn', i === 0 ? 'active' : '', t.coming ? 'coming' : ''].filter(Boolean).join(' ');
      return `<button class="${cls}" onclick="switchTab(${i + 1})">
  <span class="tab-num">${esc(t.num)}</span>
  <span class="tab-name">${esc(t.name)}</span>
  <span class="tab-badge">${esc(t.badge)}</span>
</button>`;
    }).join('\n');
    return `<div class="tab-bar-wrap"><div class="tab-bar">${btns}</div></div>`;
  }

  /* ── Example item ── */
  function renderExample(ex) {
    if (ex.type === 'vn') {
      return `<div class="ex-item"><span class="ex-flag">🇻🇳</span><span class="ex-text">${esc(ex.text)}</span></div>`;
    }
    const markerCls = ex.type === 'contrast' ? 'contrast' : 'support';
    const cleanText = ex.text.replace(/^[+✗]\s*/, '');
    return `<div class="ex-item"><span class="ex-flag ex-marker ${markerCls}">🌐</span><span class="ex-text">${esc(cleanText)}</span></div>`;
  }

  /* ── Idea card ── */
  function renderIdea(idea, num) {
    const examples = idea.examples.map(renderExample).join('');
    return `<div class="idea-card">
  <div class="idea-title"><span class="idea-num">${num}</span>${esc(idea.title)}</div>
  <div class="idea-flow">${flow(idea.flow)}</div>
  <div class="examples-wrap">${examples}</div>
</div>`;
  }

  /* ── Side ── */
  function renderSide(side, cls) {
    const tag = cls === 'side-a' ? 'Side A' : 'Side B';
    const ideas = side.ideas.map((idea, i) => renderIdea(idea, i + 1)).join('');
    return `<div class="side ${cls}">
  <div class="side-header"><span class="side-tag">${tag}</span><h3>${esc(side.label)}</h3></div>
  ${ideas}
</div>`;
  }

  /* ── Question block ── */
  function renderQuestionBlock(q, num, total) {
    const srcPart = q.source ? ` &nbsp;·&nbsp; ${esc(q.source)}` : '';
    return `<div class="question-block">
  <div class="question-block-header">
    <div class="q-label">Question ${num} of ${total}${srcPart}</div>
    <p>${esc(q.qText)}</p>
  </div>
  <div class="sides-grid">
    ${renderSide(q.sideA, 'side-a')}
    ${renderSide(q.sideB, 'side-b')}
  </div>
</div>`;
  }

  /* ── Questions box ── */
  function renderQuestionsBox(tab) {
    const items = tab.questions.map((q, i) => {
      const srcSpan = q.source ? ` <span class="q-source">(${esc(q.source)})</span>` : '';
      return `<div class="question-item">
  <div class="q-num">${i + 1}</div>
  <div class="q-text">${esc(q.text)}${srcSpan}</div>
</div>`;
    }).join('');
    return `<div class="section-label">Real IELTS Questions</div>
<div class="questions-box">
  <h3>Sub-category ${parseInt(tab.num)} — Exam Questions</h3>
  ${items}
</div>`;
  }

  /* ── Vocab group ── */
  function renderVocabGroup(g, style) {
    const styleAttr = style ? ` style="${style}"` : '';
    const header = `<div class="vocab-header"><div>Phrase</div><div>Vietnamese</div><div>Meaning</div><div>Synonyms</div></div>`;
    const items = g.items.map(v =>
      `<div class="vocab-item">
  <div class="vocab-phrase">${esc(v.phrase)}</div>
  <div class="vocab-vn">${esc(v.vn)}</div>
  <div class="vocab-meaning">${esc(v.meaning)}</div>
  <div class="vocab-synonyms">${esc(v.synonyms)}</div>
</div>`).join('');
    return `<div class="vocab-group"${styleAttr}><h3>${esc(g.group)}</h3>${header}${items}</div>`;
  }

  /* ── Vocab section ── */
  function renderVocab(tabNum, vocab) {
    // vocab items have layout: 'pre' (full-width above grid), 'half' (in grid), 'span' (full-width in grid)
    const preGroups = vocab.filter(g => g.layout === 'pre');
    const gridGroups = vocab.filter(g => g.layout !== 'pre');

    const preHtml = preGroups.length
      ? `<div style="margin-bottom: 28px;">${preGroups.map(g => renderVocabGroup(g)).join('')}</div>`
      : '';

    const gridHtml = gridGroups.length
      ? `<div class="vocab-grid">${gridGroups.map(g => {
          const style = g.layout === 'span' ? 'grid-column: 1 / -1;' : '';
          return renderVocabGroup(g, style);
        }).join('')}</div>`
      : '';

    return `<div class="section-label">Key Vocabulary</div>
<div class="vocab-section">
  <h2>📚 Essential Words &amp; Phrases — Sub-category ${parseInt(tabNum)}</h2>
  ${preHtml}${gridHtml}
</div>`;
  }

  /* ── Full tab panel ── */
  function renderPanel(tab, index) {
    const isActive = index === 0;
    const panelId = `tab-${index + 1}`;

    if (tab.coming) {
      return `<div id="${panelId}" class="tab-panel${isActive ? ' active' : ''}">
<div class="container"><div class="coming-soon">
  <div class="cs-icon">📝</div>
  <h3>${esc(tab.fullName || tab.name)}</h3>
  <p>This sub-category is coming soon. Content will include real IELTS questions, Side A &amp; B ideas with Vietnamese examples, and key vocabulary.</p>
</div></div></div>`;
    }

    const questionBlocks = tab.ideas.map((q, i) =>
      `<div class="section-label">Question ${i + 1} — Ideas &amp; Arguments</div>
${renderQuestionBlock(q, i + 1, tab.ideas.length)}`
    ).join('\n');

    const pbadges = tab.panelBadges
      ? `<div class="badge-row">${badges(tab.panelBadges, 'panel-badge')}</div>`
      : '';

    return `<div id="${panelId}" class="tab-panel${isActive ? ' active' : ''}">
<div class="container">
  <div class="panel-header">
    <div class="panel-num">Sub-category ${parseInt(tab.num)} of ${D.tabs.length}</div>
    <h2>${esc(tab.fullName || tab.name)}</h2>
    <p>${esc(tab.desc || '')}</p>
    ${pbadges}
  </div>
  ${renderQuestionsBox(tab)}
  ${questionBlocks}
  ${renderVocab(tab.num, tab.vocab)}
</div>
</div>`;
  }

  /* ── Footer ── */
  function renderFooter() {
    return `<div class="page-footer">IELTS Writing Task 2 — Ideas Book &nbsp;·&nbsp; Topic: ${esc(D.topic)} &nbsp;·&nbsp; ${D.tabs.length} Sub-categories</div>`;
  }

  /* ── Assemble ── */
  const html = [
    renderHeader(),
    renderTabBar(),
    ...D.tabs.map((t, i) => renderPanel(t, i)),
    renderFooter()
  ].join('\n');

  document.body.innerHTML = html;

  /* ── Tab switching ── */
  window.switchTab = function (n) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + n).classList.add('active');
    document.querySelectorAll('.tab-btn')[n - 1].classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
})();
