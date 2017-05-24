import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | forms');

test('visiting /forms', function(assert) {
  visit('/forms');

  andThen(function() {
    assert.equal(currentURL(), '/forms');
    assert.ok(true, 'If this is passing, this page has no deprecation warnings');
  });
});
