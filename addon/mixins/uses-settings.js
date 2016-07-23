import Ember from 'ember';

const { computed, Mixin } = Ember;

export default Mixin.create({
  _mdSettings: computed(function() {
    // jscs:disable disallowDirectPropertyAccess
    let owner = Ember.getOwner ? Ember.getOwner(this) : this.get('container');
    // jscs:enable disallowDirectPropertyAccess
    return owner.lookup('service:materialize-settings');
  })
});
