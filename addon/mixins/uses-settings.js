import Ember from 'ember';

const { computed } = Ember;

export default Ember.Mixin.create({
  _mdSettings: computed(function() {
    return this.get('container').lookup('service:materialize-settings');
  })
});
