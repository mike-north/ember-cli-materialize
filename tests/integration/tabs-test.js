import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { module, test } from 'qunit';

let App;

const { run } = Ember;

module('Acceptance - Tabs', {
  setup() {
    App = startApp();
  },
  teardown() {
    run(App, 'destroy');
  }
});

test('Basic Example - One set of tabs should be rendered, with three tabs', function(assert) {
  visit('/tabs').then(function() {
    assert.equal(find('.basic-tabs-example .materialize-tabs').length, 1, 'One set of tabs');
    assert.equal(find('.basic-tabs-example .materialize-tabs .materialize-tabs-tab a').length, 3, 'Three tabs in the set');
    assert.equal(find('.basic-tabs-example .materialize-tabs .materialize-tabs-tab:first-child a').text().trim(), 'First', 'Label of first tab is "First"');
    assert.equal(find('.basic-tabs-example .materialize-tabs .materialize-tabs-tab:nth-child(2) a').text().trim(), 'Second', 'Label of second tab is "Second"');
    assert.equal(find('.basic-tabs-example .materialize-tabs .materialize-tabs-tab:nth-child(3) a').text().trim(), 'Third', 'Label of third tab is "Third"');

    assert.equal(find('.basic-tabs-example .materialize-tabs .materialize-tabs-tab:first-child .active').length, 1, 'First tab is initially selected');
  });
});
