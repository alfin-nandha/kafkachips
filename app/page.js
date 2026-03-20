import fs from 'node:fs';
import path from 'node:path';
import Script from 'next/script';

function getLegacyBodyHtml() {
  const htmlPath = path.join(process.cwd(), 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  const match = html.match(/<body[^>]*>([\s\S]*?)<script\s+src="js\/main\.js"><\/script>[\s\S]*?<\/body>/i);

  if (match?.[1]) {
    return match[1];
  }

  const fallback = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return fallback?.[1] ?? '';
}

export default function Page() {
  const bodyHtml = getLegacyBodyHtml();

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Script src="/legacy/main.js" strategy="afterInteractive" />
    </>
  );
}
