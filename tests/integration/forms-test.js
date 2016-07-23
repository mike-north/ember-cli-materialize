import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { module, test } from 'qunit';

let App;

const { run } = Ember;

module('Acceptance - Forms', {
  setup() {
    App = startApp();
  },
  teardown() {
    run(App, 'destroy');
  }
});

test('Load the demo page', assert => {
  visit('/forms');

  andThen(function() {
    assert.ok(true, 'If this is passing, this page has no deprecation warnings');
  });
});
