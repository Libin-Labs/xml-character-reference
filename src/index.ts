export function encodeCodePointReference(codePoint: number): string {
  if (
    !Number.isInteger(codePoint) ||
    codePoint < 0 ||
    codePoint > 0x10ffff ||
    (codePoint >= 0xd800 && codePoint <= 0xdfff)
  )
    throw new RangeError('Expected Unicode scalar value');
  return '&#x' + codePoint.toString(16).toUpperCase() + ';';
}
export function decodeCodePointReference(reference: string): string {
  if (typeof reference !== 'string') throw new TypeError('Expected reference text');
  const m = /^&#(?:([0-9]+)|[xX]([0-9a-fA-F]+));$/.exec(reference);
  if (!m) throw new RangeError('Invalid numeric character reference');
  const point = Number(m[1] ?? '0x' + m[2]);
  if (
    !Number.isInteger(point) ||
    point < 0 ||
    point > 0x10ffff ||
    (point >= 0xd800 && point <= 0xdfff)
  )
    throw new RangeError('Invalid Unicode scalar');
  return String.fromCodePoint(point);
}
