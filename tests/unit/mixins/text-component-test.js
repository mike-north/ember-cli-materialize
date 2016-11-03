import Ember from 'ember';
import TextComponentMixin from 'ember-cli-materialize/mixins/text-component';
import { module, test } from 'qunit';

module('Unit | Mixin | text component');

// Replace this with your real tests.
test('it works', function(assert) {
  let TextComponentObject = Ember.Object.extend(TextComponentMixin);
  let subject = TextComponentObject.create();
  assert.ok(subject);
});
