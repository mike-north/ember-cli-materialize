import Ember from 'ember';

const { computed } = Ember;

export default Ember.Mixin.create({
  _mdSettings: computed(function() {
    const owner = Ember.getOwner ? Ember.getOwner(this) : this.get('container');
    return owner.lookup('service:materialize-settings');
  })
});
