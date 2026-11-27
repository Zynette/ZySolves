import {cp,readFile,writeFile,readdir,rm} from 'node:fs/promises';
const base='/Zynette/ZySolves/rebuild/digital-studio-20261126/review-preview/';
await rm('review-preview',{recursive:true,force:true});await cp('dist','review-preview',{recursive:true});await rm('review-preview/qa.html',{force:true});await rm('review-preview/_headers',{force:true});
const files=[];async function walk(dir){for(const f of await readdir(dir,{withFileTypes:true})){const path=dir+'/'+f.name;if(f.isDirectory())await walk(path);else files.push(path);}}await walk('review-preview');
for(const path of files){if(!/\.(html|css|mjs)$/.test(path))continue;let text=await readFile(path,'utf8');if(path.endsWith('.html')){text=text.replace('</head>',`<meta name="review-base" content="${base}"></head>`).replace(/(href|src)="(\/[^"?#]*)([^\"]*)"/g,(_,attr,p,tail)=>`${attr}="${base}${p.slice(1)}${p.endsWith('/')?'index.html':''}${tail}"`);}if(path.endsWith('.css'))text=text.replace(/url\(['"]?(\/[^'"\)]+)['"]?\)/g,(_,p)=>`url('${base}${p.slice(1)}')`);await writeFile(path,text);}
console.log('Static review snapshot prepared; no APIs, payments or DNS changes.');
