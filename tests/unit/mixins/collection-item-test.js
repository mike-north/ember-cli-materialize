import Ember from 'ember';
import CollectionItemMixin from 'ember-cli-materialize/mixins/collection-item';
import { module, test } from 'qunit';

module('Unit | Mixin | collection item');

// Replace this with your real tests.
test('it works', function(assert) {
  let CollectionItemObject = Ember.Object.extend(CollectionItemMixin);
  let subject = CollectionItemObject.create();
  assert.ok(subject);
});
