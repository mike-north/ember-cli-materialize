import { mdRegexReplace } from '../../../helpers/md-regex-replace';
import { module, test } from 'qunit';

module('Unit | Helper | md regex replace');

test('replace string', function(assert) {
  const result = mdRegexReplace(['foo.bar', 'foo.', '']);
  assert.equal(result, 'bar');
});
