import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | loader');

test('visiting /loader', function(assert) {
  visit('/loader');

  andThen(function() {
    assert.equal(currentURL(), '/loader');
    assert.ok(true, 'If this is passing, this page has no deprecation warnings');
  });
});
