import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | pagination');

test('visiting /pagination', function(assert) {
  visit('/pagination');

  andThen(function() {
    assert.equal(currentURL(), '/pagination');
    assert.ok(
      true,
      'If this is passing, this page has no deprecation warnings'
    );
  });
});
