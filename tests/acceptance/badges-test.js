import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | badges');

test('visiting /badges', function(assert) {
  visit('/badges');

  andThen(function() {
    assert.equal(currentURL(), '/badges');
    assert.ok(true, 'If this is passing, this page has no deprecation warnings');
  });
});
