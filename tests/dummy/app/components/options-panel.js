import Component from '@ember/component';
import computed from 'ember-new-computed';

export default Component.extend({
  componentName: '',
  header: computed('componentName', {
    get() {
      return `${this.get('componentName')} component options are:`;
    }
  })
});
