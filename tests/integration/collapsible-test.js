import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { module, test } from 'qunit';

var App;

module('Acceptance - Collapsible', {
  setup: function() {
    App = startApp();
    visit('/collapsible');
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Collapsible basic tests', function(assert) {

  andThen(function() {
    assert.equal(find('.accordion-example ul > li').length, 3, 'Accordion should have 3 headers');
    assert.equal(find('.expandable-example ul > li').length, 3, 'Expandable should have 3 headers');
    assert.equal(find('.preselected-example ul >li').length, 3, 'Preselected should have 3 headers');
    assert.equal(find('.accordion-example ul > li>.active').length, 0, 'Accordion should not have an active collapsible');
    assert.equal(find('.expandable-example ul > li>.active').length, 0, 'Expandable should not have an active collapsible');
    assert.equal(find('.preselected-example ul > li>.active').length, 1, 'Preselected should have an active collapsible');
    assert.equal(find('.action-selection-example ul > li').length, 3, 'Action selection should also have 3 headers');
  });

});

test('Action collapsible operations', function(assert){
  andThen(function(){
    assert.equal(find(".selected-action").text(), "", "there should be no selected action");
  });

  click('.action-selection-example ul > li:first-child > .collapsible-header');

  andThen(function(){
    assert.equal(find(".selected-action").text(), "cloud", "after clicking, we should have the correct selected action");
    assert.equal(find('.action-selection-example ul > li > .active').length, 1, "we should have an activated tab");
  });

  click('.action-selection-example ul > li:nth-child(2) > .collapsible-header');

  andThen(function(){
    assert.equal(find(".selected-action").text(), "marker", "clicking another header should fire the action again");
  });
});
