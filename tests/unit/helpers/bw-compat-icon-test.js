import { bwCompatIcon } from 'dummy/helpers/bw-compat-icon';
import { module, test } from 'qunit';

module('Unit | Helper | bw compat icon');

// Replace this with your real tests.
test('it works with the old materialize icons', function(assert) {
  assert.equal(bwCompatIcon(['mdi-action-android']).toHTML(),
      `<i class='mdi-action-android'></i>`,
      'Correct html for old icons');

  assert.equal(bwCompatIcon(['mdi-action-android blue-text']).toHTML(),
      `<i class='mdi-action-android blue-text'></i>`,
      'Correct html for old icons with other classes');
});

test('it works with the new materialize icons', function(assert) {
  assert.equal(bwCompatIcon(['all_out']).toHTML(),
      `<i class='material-icons'>all_out</i>`,
      'Correct html for new icons');

  assert.equal(bwCompatIcon(['all_out blue-text']).toHTML(),
      `<i class='material-icons blue-text'>all_out</i>`,
      'Correct html for old icons');
});
