import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import config from '../astro.config.mjs';

const root = resolve('dist');
const prefix = config.base.replace(/\/$/, '') + '/';
const pages = readdirSync(root, { recursive: true }).filter(path => path.endsWith('.html'));
const problems = [];
let checked = 0;

for (const file of pages) {
  const page = readFileSync(resolve(root, file), 'utf8');
  const publishedUrl = new URL(prefix + file.replace(/index\.html$/, ''), config.site);
  if (!page.includes('id="content"') || !page.includes('<h1')) problems.push(file + ' misses the main landmark or heading');
  for (const [, property, value] of page.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if (property === 'href' && /^tel:\+?[0-9]+$/i.test(value)) continue;
    if (property === 'href' && /^https:\/\/(?:www\.linkedin\.com\/sharing\/share-offsite\/\?url=|www\.facebook\.com\/sharer\/sharer\.php\?u=)/.test(value)) continue;
    if (value.startsWith('//') || /^https?:/i.test(value)) {
      problems.push(file + ' includes an external ' + property + ': ' + value);
      continue;
    }
    const link = new URL(value, publishedUrl);
    if (!link.pathname.startsWith(prefix)) {
      problems.push(file + ' links outside the project prefix: ' + value);
      continue;
    }
    const path = decodeURIComponent(link.pathname.slice(prefix.length));
    const target = resolve(root, path.endsWith('/') || !path ? path + 'index.html' : path);
    if (!existsSync(target)) problems.push(file + ' links to missing ' + relative(root, target));
    else if (link.hash && target.endsWith('.html') && !readFileSync(target, 'utf8').includes('id="' + decodeURIComponent(link.hash.slice(1)) + '"')) {
      problems.push(file + ' links to missing anchor ' + value);
    }
    checked++;
  }
}

const contact = readFileSync(resolve(root, 'contact/index.html'), 'utf8');
assert.match(contact, /Demonstration form/);
assert.doesNotMatch(contact, /<form[^>]+(?:action|method)=/);
assert.doesNotMatch(contact, /<(?:input|textarea)[^>]+\bname=/);
assert.equal(pages.length, 13, 'Expected the six main pages, six detail pages, and a 404 page');
assert.equal(problems.length, 0, problems.join('\n'));
console.log('Verified ' + pages.length + ' pages and ' + checked + ' internal link and asset references under ' + prefix);
