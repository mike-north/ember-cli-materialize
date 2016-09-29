import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { module, test } from 'qunit';

let App;

const { run } = Ember;

module('Acceptance - Table', {
  setup() {
    App = startApp();
  },
  teardown() {
    run(App, 'destroy');
  }
});

test('Load the demo page', assert => {
  visit('/tables');

  andThen(function() {
    assert.equal(find('.basic-table table tbody tr').length, 6, 'Three rows (x2 tables) in basic table example');
    assert.equal(find('.basic-table table:nth-child(2) tbody tr:first-child td').length, 2, 'Two columns');

    assert.equal(find('.custom-cells table td .btn').length, 3, 'Buttons as table cells');

    assert.equal(find('.custom-headers table thead th i').length, 2, 'Headers are customized');

  });
});
