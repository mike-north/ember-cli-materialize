import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { test } from 'ember-qunit';

var App;

module('Table - Integration', {
  setup() {
    App = startApp();
  },
  teardown() {
    Ember.run(App, 'destroy');
  }
});


test('Basic Example - Rendered properly on screen', function(assert) {
  visit('/table');

  andThen(function() {
    assert.equal(find('.declarative-table-example .materialize-table').length, 1, 'Table is on the page');
    assert.equal(find('.declarative-table-example .materialize-table tbody .materialize-table-row').length, 4, 'Table has 6 rows');
    assert.equal(find('.declarative-table-example .materialize-table tbody .materialize-table-row:first-child td').length, 3, 'Table has 3 columns');
  });
});

test('Basic Example - Bindings on cells', function(assert) {
  visit('/table');
  andThen(function() {
    var tableController = App.__container__.lookup('controller:table');

    assert.equal(find('.declarative-table-example .materialize-table .materialize-table-cell:last-child').text().replace(/[\n\s]*/g,''), '6234', 'Table has initial quantity values: 6, 2, 3, 4');
    tableController.send('doubleQty');
    Ember.run.schedule('afterRender', function () {
        assert.equal(find('.declarative-table-example .materialize-table .materialize-table-cell:last-child').text().replace(/[\n\s]*/g,''), '12468', 'Table has doubled quantity values: 12, 4, 6, 8');
    });
  });
});
