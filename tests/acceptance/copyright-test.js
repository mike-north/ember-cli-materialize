import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | copyright');

test('visiting /copyright', function(assert) {
  visit('/copyright');

  andThen(function() {
    assert.equal(currentURL(), '/copyright');
    assert.ok(true, 'If this is passing, this page has no deprecation warnings');
  });
});
