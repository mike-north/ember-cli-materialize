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

    assert.equal(find('.declarative-table-example .materialize-table thead th:first-child').width(), 40, 'First column has width of 40');

    assert.equal(find('.declarative-table-example .materialize-table thead th:first-child').hasClass('right-align'), true, 'First column header has right-alignment');
    assert.equal(find('.declarative-table-example .materialize-table thead th:first-child').hasClass('left-align'), false, 'First column header doesn\'t have left-alignment');
    assert.equal(find('.declarative-table-example .materialize-table tbody tr td:first-child').hasClass('right-align'), true, 'First column body cells have right-alignment');
    assert.equal(find('.declarative-table-example .materialize-table tbody tr td:first-child').hasClass('left-align'), false, 'First column body cells doesn\'t have left-alignment');


    assert.equal(find('.declarative-table-example .materialize-table thead th:last-child').hasClass('right-align'), false, 'Last column header doesn\'t have right-alignment');
    assert.equal(find('.declarative-table-example .materialize-table thead th:last-child').hasClass('left-align'), true, 'Last column header has left-alignment');
    assert.equal(find('.declarative-table-example .materialize-table tbody tr td:last-child').hasClass('right-align'), false, 'Last column body cells doesn\'t have right-alignment');
    assert.equal(find('.declarative-table-example .materialize-table tbody tr td:last-child').hasClass('left-align'), true, 'Last column body cells has left-alignment');


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
