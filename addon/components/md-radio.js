import Ember from 'ember';
import layout from '../templates/components/md-radio';

const { Component } = Ember;

export default Component.extend({
  classNames: ['md-radio'],
  inputClass: null,
  layout,
  tagName: 'p',
  value: false,
  actions: {
    onChange() {
      if (this.$('input')[0].checked) {
        this.get('_group').set('value', this.get('value'));
      }
    }
  }
});
