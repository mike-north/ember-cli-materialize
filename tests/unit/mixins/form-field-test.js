import Ember from 'ember';
import FormFieldMixin from 'ember-cli-materialize/mixins/form-field';
import { module, test } from 'qunit';

module('Unit | Mixin | form field');

// Replace this with your real tests.
test('it works', function(assert) {
  let FormFieldObject = Ember.Object.extend(FormFieldMixin);
  let subject = FormFieldObject.create();
  assert.ok(subject);
});
