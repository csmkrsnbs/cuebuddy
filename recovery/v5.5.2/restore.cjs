'use strict';
const fs = require('node:fs');
const path = require('node:path');
const {createHash} = require('node:crypto');
const assert = require('node:assert/strict');
const base = __dirname;
const readJSON = name => JSON.parse(fs.readFileSync(path.join(base,name),'utf8'));
const hash = b => createHash('sha1').update(b).digest('hex');
const manifest = readJSON('manifest.json');
const files = new Map();
for (const name of ['public-html.json','public-scripts.json','public-assets.json']) {
  const a = readJSON(name);
  for (const [p,s] of Object.entries(a.files)) files.set(p,Buffer.from(s,'utf8'));
  for (const [p,source] of Object.entries(a.identicalCopies || {})) {
    assert(files.has(source),'Missing duplicate source '+source);
    files.set(p,files.get(source));
  }
}
for (const [p,s] of Object.entries(readJSON('verified-source-base64.json').files)) files.set(p,Buffer.from(s,'base64'));
for (const p of ['api/session.js','api/practice.js','scripts/test-core.cjs']) files.set(p,fs.readFileSync(path.join(base,'recovered',p)));
const expected = manifest.sourceFileInventory.filter(f=>!f.path.endsWith('.png'));
assert.equal(expected.length,27);
assert.equal(files.size,expected.length);
for (const f of expected) {
  assert(files.has(f.path),'Missing '+f.path);
  assert.equal(hash(files.get(f.path)),f.vercelContentUid,'SHA-1 mismatch: '+f.path);
  console.log('VERIFIED '+f.path);
}
if (process.argv[2] === '--verify-only') {
  console.log('27/27 text source files verified; 3 generated PNG originals not archived.');
  process.exit(0);
}
assert.equal(process.argv.length,3,'Usage: node restore.cjs /empty/output-directory (or --verify-only)');
const dest=path.resolve(process.argv[2]);
if (fs.existsSync(dest)) {
  assert(fs.statSync(dest).isDirectory(),'Destination must be a directory');
  assert.equal(fs.readdirSync(dest).length,0,'Destination must be empty');
}
for (const f of expected) {
  const p=path.resolve(dest,f.path);
  assert(p.startsWith(dest+path.sep),'Unsafe source path');
}
fs.mkdirSync(dest,{recursive:true});
for (const f of expected) {
  const p=path.resolve(dest,f.path);
  fs.mkdirSync(path.dirname(p),{recursive:true});
  fs.writeFileSync(p,files.get(f.path),{flag:'wx'});
  assert.equal(hash(fs.readFileSync(p)),f.vercelContentUid,'Write verification: '+f.path);
}
console.log('Restored and verified 27 source files. Use Node 22; npm install regenerates artwork and runs mocked tests. No production deploy performed.');
