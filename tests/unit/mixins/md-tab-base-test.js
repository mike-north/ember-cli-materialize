import Ember from 'ember';
import MdTabBaseMixin from 'ember-cli-materialize/mixins/md-tab-base';
import { module, test } from 'qunit';

module('Unit | Mixin | md tab base');

// Replace this with your real tests.
test('it works', function(assert) {
  let MdTabBaseObject = Ember.Object.extend(MdTabBaseMixin);
  let subject = MdTabBaseObject.create();
  assert.ok(subject);
});
