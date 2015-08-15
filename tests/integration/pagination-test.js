import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { module, test } from 'qunit';

let App;

module('Acceptance - Pagination', {
  setup() {
    App = startApp();
  },
  teardown() {
    Ember.run(App, 'destroy');
  }
});

test('Load the demo page', assert => {
  visit('/pagination');

  andThen(function() {
    assert.ok(true, 'If this is passing, this page has no deprecation warnings');
  });
});
