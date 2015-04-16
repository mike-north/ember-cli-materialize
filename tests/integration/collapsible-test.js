import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { test } from 'ember-qunit';

var App;

module('Acceptance - Collapsible', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Collapsible basic tests', function(assert) {
  visit('/collapsible').then(function() {
    assert.equal(find('#accordion>li').length, 3, 'Accordion should have 3 headers');
    assert.equal(find('#expandable>li').length, 3, 'Expandable should have 3 headers');
    assert.equal(find('#preselected>li').length, 3, 'Preselected should have 3 headers');
    assert.equal(find('#accordion>li>.active').length, 0, 'Accordion should not have an active collapsible');
    assert.equal(find('#expandable>li>.active').length, 0, 'Expandable should not have an active collapsible');
    assert.equal(find('#preselected>li>.active').length, 1, 'Preselected should have an active collapsible');
  });
});
