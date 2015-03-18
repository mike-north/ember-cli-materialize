import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { test } from 'ember-qunit';

var App;

module('Collapsible - Integration', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});


test('Accordion should have 3 headers', function(assert) {
  visit('/collapsible').then(function() {
    assert.equal(find('#accordion>li').length, 3);
  });
});

test('Expandable should have 3 headers', function(assert) {
  visit('/collapsible').then(function() {
    assert.equal(find('#expandable>li').length, 3);
  });
});

test('Preselected should have 3 headers', function(assert) {
  visit('/collapsible').then(function() {
    assert.equal(find('#preselected>li').length, 3);
  });
});

test('Accordion should not have an active collapsible', function(assert) {
  visit('/collapsible').then(function() {
    assert.equal(find('#accordion>li>.active').length, 0);
  });
});

test('Expandable should not have an active collapsible', function(assert) {
  visit('/collapsible').then(function() {
    assert.equal(find('#expandable>li>.active').length, 0);
  });
});

test('Preselected should have an active collapsible', function(assert) {
  visit('/collapsible').then(function() {
    assert.equal(find('#preselected>li>.active').length, 1);
  });
});
