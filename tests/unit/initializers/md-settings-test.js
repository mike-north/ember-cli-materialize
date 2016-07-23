import Ember from 'ember';
import { initialize } from '../../../initializers/md-settings';
import { module, test } from 'qunit';

let container, application;

const { run, Application } = Ember;

module('Unit | Initializer | md settings', {
  beforeEach() {
    run(function() {
      application = Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(container, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
