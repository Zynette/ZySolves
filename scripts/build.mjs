import {createHash} from 'node:crypto';
import {mkdir,writeFile,cp,rm,readFile} from 'node:fs/promises';
import {pages} from '../src/pages.mjs';
import {layout} from '../src/components.mjs';
import {products} from '../src/catalogue.mjs';
const production=process.env.DEPLOY_ENV==='production';
const origin=process.env.SITE_URL||'https://zysolves.com';
if(!/^https:\/\/[a-z0-9.-]+$/i.test(origin))throw new Error('SITE_URL must be an HTTPS origin');
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});await cp('public','dist',{recursive:true});
for(const page of pages){const dir='dist'+page.path;await mkdir(dir,{recursive:true});await writeFile(dir+'index.html',layout({...page,origin,noindex:!production||['/checkout/','/order/','/bag/','/404/'].includes(page.path)}));}
await cp('dist/404/index.html','dist/404.html');
await writeFile('dist/robots.txt',production?`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n');
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.filter(p=>!['/bag/','/checkout/','/order/','/404/'].includes(p.path)).map(p=>`<url><loc>${origin}${p.path}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/assets/catalogue.mjs',await readFile('src/catalogue.mjs'));
await writeFile('dist/assets/products.json',JSON.stringify(products));
await writeFile('dist/assets/config.json',JSON.stringify({inquiriesEnabled:production&&process.env.INQUIRIES_ENABLED==='true',turnstileSiteKey:production?process.env.PUBLIC_TURNSTILE_SITE_KEY||'':''}));
const hashes=new Set();
for(const page of pages){const html=await readFile('dist'+page.path+'index.html','utf8');for(const m of html.matchAll(/<script(?: [^>]*)?>([\s\S]*?)<\/script>/g)){if(m[1])hashes.add("'sha256-"+createHash('sha256').update(m[1]).digest('base64')+"'");}}
for(const product of products.filter(p=>p.file)){const html=await readFile('dist/downloads/'+product.file,'utf8');for(const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g))hashes.add("'sha256-"+createHash('sha256').update(m[1]).digest('base64')+"'");}
let security=await readFile('public/_headers','utf8');security=security.replace(/ 'sha256-[^']+'/g,'').replace("script-src 'self'","script-src 'self' "+[...hashes].join(' '));await writeFile('dist/_headers',security);
console.log(`Built ${pages.length} pages. ${production?'PRODUCTION':'PREVIEW: noindex, sending disabled'}.`);
