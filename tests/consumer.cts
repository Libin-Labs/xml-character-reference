import * as api from '@lp-labs/xml-character-reference';
import {
  encodeCodePointReference,
  decodeCodePointReference,
} from '@lp-labs/xml-character-reference';
console.log(encodeCodePointReference(0x1f600));
// @ts-expect-error invalid argument must be rejected by declarations
api.encodeCodePointReference('A');
