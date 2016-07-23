import Ember from 'ember';
import computed from 'ember-new-computed';

const { Component } = Ember;

export default Component.extend({
  componentName: '',
  header: computed('componentName', {
    get() {
      return `${this.get('componentName')} component options are:`;
    }
  })
});
