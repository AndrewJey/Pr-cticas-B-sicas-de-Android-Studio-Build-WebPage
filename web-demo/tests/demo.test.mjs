import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(dir, '..', 'index.html'), 'utf8');

test('Android WebView demo HTML has valid JS and documents archived labs', () => {
  const m = html.match(/<script>([\s\S]*?)<\/script>/);
  assert.ok(m);
  new vm.Script(m[1]);
  assert.ok(html.includes('SimpleDataClase33-master.zip'));
  assert.ok(html.includes('FIRST_APP.rar'));
});
