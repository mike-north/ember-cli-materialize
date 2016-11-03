import Ember from 'ember';
import layout from '../templates/components/md-check';

const { Component } = Ember;

export default Component.extend({
  classNames: ['md-check'],
  inputClassNames: null,
  tagName: 'p',
  disabled: false,
  layout,
  value: false,
  indeterminate: false,
  attributeBindings: ['indeterminate'],
  actions: {
    onChange() {
      this.set('value', this.$('input')[0].checked);
      this.sendAction('on-change');
    }
  }
});
