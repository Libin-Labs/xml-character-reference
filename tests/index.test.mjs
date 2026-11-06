import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('encodes ASCII scalar', () => {
  assert.equal(api.encodeCodePointReference(65), '&#x41;');
});
test('encodes supplementary scalar', () => {
  assert.equal(api.encodeCodePointReference(0x1f600), '&#x1F600;');
});
test('decodes hexadecimal scalar', () => {
  assert.equal(api.decodeCodePointReference('&#x41;'), 'A');
});
test('decodes decimal scalar', () => {
  assert.equal(api.decodeCodePointReference('&#65;'), 'A');
});
test('round trips supplementary scalar', () => {
  assert.equal(api.decodeCodePointReference(api.encodeCodePointReference(0x1f600)), '😀');
});
test('rejects surrogate scalar', () => {
  assert.throws(() => api.encodeCodePointReference(0xd800), RangeError);
});
