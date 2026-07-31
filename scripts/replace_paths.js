// replace_paths.js
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..'); // project root
function replaceInFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const newContent = content.replace(/\/g, '');
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated', file);
  }
}
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git', '.next', 'dist', 'out'].includes(entry.name)) continue;
      walk(fullPath);
    } else if (entry.isFile()) {
      if (/\.(astro|tsx|ts|js|json|css|html)$/.test(entry.name)) {
        replaceInFile(fullPath);
      }
    }
  }
}
walk(root);
console.log('Path replacement complete.');
