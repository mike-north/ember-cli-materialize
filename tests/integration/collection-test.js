import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { module, test } from 'qunit';

var App;

module('Acceptance - Collection', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Load the demo page', function(assert) {
  visit('/collection');

  andThen(function () {
    // Basic collection
    assert.equal(find('.basic-collection-example .collection-item').length, 3, '3 items in basic collection example');

    // Links example
    assert.equal(find('.links-collection-example a.collection-item').length, 3, 'links items in links collection example');
      // "active" link
    assert.equal(find('.links-collection-example a.collection-item.active').text(), 'Gustavo Freng', 'Gus should be active');

    // Simple header on collection
    assert.equal(find('.simple-header-collection-example .collection-item').length, 3, '3 items in basic collection example');
    assert.equal(find('.simple-header-collection-example .collection-header').text(), 'People to Watch', 'Header content is correct');
    assert.equal(find('.simple-header-collection-example .with-header').length, 1, 'with-header class is present');

     // Custom header on collection
    assert.equal(find('.custom-header-collection-example .collection-item').length, 3, '3 items in basic collection example');
    assert.equal(find('.custom-header-collection-example .collection-header').text(), 'People to Watch', 'Header content is correct');
    assert.equal(find('.custom-header-collection-example .with-header').length, 1, 'with-header class is present');
    assert.equal(find('.custom-header-collection-example .collection-header.deep-purple').length, 1, 'Header is customized (deep-purple)');

  });
});
