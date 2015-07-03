import Ember from 'ember';
import computed from 'ember-new-computed';

export default Ember.Component.extend({
  componentName: '',
  header: computed('componentName', {
    get() {
      return `${this.get('componentName')} component options are:`;
    }
  })
});
