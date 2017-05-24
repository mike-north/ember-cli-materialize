import Ember from 'ember';

const { computed, Mixin, getOwner } = Ember;

export default Mixin.create({
  _mdSettings: computed(function() {
    let owner = getOwner ? getOwner(this) : this.get('container');
    return owner.lookup('service:materialize-settings');
  })
});
