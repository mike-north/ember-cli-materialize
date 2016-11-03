import Ember from 'ember';
import MdPushpinMixin from 'ember-cli-materialize/mixins/md-pushpin';
import { module, test } from 'qunit';

module('Unit | Mixin | md pushpin');

// Replace this with your real tests.
test('it works', function(assert) {
  let MdPushpinObject = Ember.Object.extend(MdPushpinMixin);
  let subject = MdPushpinObject.create();
  assert.ok(subject);
});
