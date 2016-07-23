import Ember from 'ember';
import MdButtonMixin from 'ember-cli-materialize/mixins/md-button';
import { module, test } from 'qunit';

module('Unit | Mixin | md button');

// Replace this with your real tests.
test('it works', function(assert) {
  let MdButtonObject = Ember.Object.extend(MdButtonMixin);
  let subject = MdButtonObject.create();
  assert.ok(subject);
});
