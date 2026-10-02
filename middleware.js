import { next } from '@vercel/functions';

export const config = {
  matcher: '/((?!favicon.ico).*)',
};

const COOKIE_NAME = 'v2auth';

export default async function middleware(request) {
  const url = new URL(request.url);
  const cookieHeader = request.headers.get('cookie') || '';
  const authed = cookieHeader
    .split(';')
    .some((c) => c.trim() === `${COOKIE_NAME}=${process.env.AUTH_TOKEN}`);

  if (request.method === 'POST') {
    const form = await request.formData();
    const pass = form.get('passcode');
    if (pass === process.env.SITE_PASSCODE) {
      // Response.redirect() returns a Response with an immutable headers
      // guard, so Set-Cookie can't be appended to it afterwards. Build the
      // redirect manually instead, which keeps headers mutable.
      return new Response(null, {
        status: 302,
        headers: {
          Location: url.origin + url.pathname,
          'Set-Cookie': `${COOKIE_NAME}=${process.env.AUTH_TOKEN}; Path=/; HttpOnly; Secure; Max-Age=2592000; SameSite=Lax`,
        },
      });
    }
    return new Response(gateHtml(true), {
      status: 401,
      headers: { 'content-type': 'text/html; charset=utf-8' },
    });
  }

  if (authed) return next();

  return new Response(gateHtml(false), {
    status: 401,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}

function gateHtml(wrong) {
  return `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CHAMPION EDU — Ideas Book v2</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 55%, #0f3460 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .card {
    background: #ffffff;
    width: 100%;
    max-width: 380px;
    border-radius: 18px;
    padding: 40px 32px 32px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.35);
    text-align: center;
    animation: rise 0.35s ease-out;
  }
  @keyframes rise {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .lock {
    width: 52px; height: 52px;
    margin: 0 auto 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0f3460, #1a5276);
    display: flex; align-items: center; justify-content: center;
  }
  .eyebrow {
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #8ab4f8;
    background: #0f3460;
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 14px;
  }
  h1 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #1a1a2e;
    line-height: 1.4;
    margin-bottom: 6px;
  }
  .subtitle {
    font-size: 0.85rem;
    color: #888;
    margin-bottom: 26px;
  }
  input[type="password"] {
    width: 100%;
    padding: 13px 16px;
    border: 1.5px solid #e0e8f5;
    border-radius: 10px;
    font-size: 1rem;
    letter-spacing: 0.08em;
    text-align: center;
    color: #1a1a2e;
    background: #f8faff;
    transition: border-color 0.15s, background 0.15s;
    outline: none;
  }
  input[type="password"]:focus {
    border-color: #0f3460;
    background: #ffffff;
  }
  button {
    width: 100%;
    margin-top: 14px;
    padding: 13px;
    background: #0f3460;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
  }
  button:hover { background: #16457f; }
  button:active { transform: scale(0.98); }
  .error {
    margin-top: 16px;
    padding: 10px 14px;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 8px;
    color: #b91c1c;
    font-size: 0.82rem;
    font-weight: 600;
  }
  .footer {
    margin-top: 24px;
    font-size: 0.72rem;
    color: #bbb;
  }
</style>
</head>
<body>
  <form class="card" method="POST">
    <div class="lock">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    </div>
    <div class="eyebrow">Champion Edu</div>
    <h1>Ideas Book for IELTS Writing Task 2 (v2)</h1>
    <p class="subtitle">Nhập passcode để xem nội dung</p>
    <input type="password" name="passcode" placeholder="• • • • • •" autofocus autocomplete="off" inputmode="numeric">
    <button type="submit">Vào xem</button>
    ${wrong ? '<div class="error">Sai passcode, thử lại.</div>' : ''}
    <div class="footer">CHAMPION EDU · Nội bộ</div>
  </form>
</body>
</html>`;
}
