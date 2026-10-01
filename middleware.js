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
      const res = Response.redirect(url.origin + url.pathname, 302);
      res.headers.append(
        'Set-Cookie',
        `${COOKIE_NAME}=${process.env.AUTH_TOKEN}; Path=/; HttpOnly; Secure; Max-Age=2592000; SameSite=Lax`
      );
      return res;
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
  return `<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>IELTS Ideas Book — v2</title>
<body style="font-family:'Segoe UI',system-ui,sans-serif;background:#f4f6fb;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0">
  <form method="POST" style="background:#fff;padding:32px;border-radius:14px;box-shadow:0 2px 12px rgba(15,52,96,.09);width:300px">
    <h2 style="margin:0 0 16px;color:#0f3460;font-size:1.1rem">IELTS Ideas Book — v2</h2>
    <input type="password" name="passcode" placeholder="Nhap passcode" autofocus
      style="width:100%;padding:10px;border:1px solid #e0e8f5;border-radius:8px;box-sizing:border-box;margin-bottom:12px;font-size:1rem">
    <button type="submit" style="width:100%;padding:10px;background:#0f3460;color:#fff;border:none;border-radius:8px;font-weight:700;cursor:pointer">Vao xem</button>
    ${wrong ? '<p style="color:#b91c1c;font-size:.85rem;margin-top:10px">Sai passcode, thu lai.</p>' : ''}
  </form>
</body></html>`;
}
