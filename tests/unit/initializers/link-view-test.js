import Ember from 'ember';
import { initialize } from '../../../initializers/link-view';
import { module, test } from 'qunit';

var container, application;

module('LinkViewInitializer', {
  setup: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

test('"data-activates" is added to attributeBindings', function(assert) {
  initialize(container, application);

  var linkView = Ember.LinkView.create();
  assert.ok(linkView.attributeBindings.indexOf('data-activates')!==-1,
    "'data-activates' must be present in `attributeBindings`");
});
