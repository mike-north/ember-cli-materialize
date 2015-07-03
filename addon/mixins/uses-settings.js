import Ember from 'ember';
import computed from 'ember-new-computed';

export default Ember.Mixin.create({
  _mdSettings: computed({
    get() {
      return this.get('container').lookup('service:materialize-settings');
    }
  })
});
