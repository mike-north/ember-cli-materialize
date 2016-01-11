import Ember from 'ember';

const { Component, computed, isPresent } = Ember;

export default Component.extend({
  classNames: ['input-field'],

  bindAttributes: ['disabled', 'readonly', 'autofocus'],
  validate: false,

  isValid: computed('validate', 'errors', 'errorMessage', function() {
    return (!this.get('validate') && !isPresent(this.get('errors.firstObject')) && !isPresent(this.get('errorMessage')));
  }),

  isInvalid: computed('validate', 'errors', 'errorMessage', function() {
    return (!this.get('validate') && (isPresent(this.get('errors.firstObject')) || isPresent(this.get('errorMessage'))));
  }),

  visited: false,

  focusOut(){
    this.set('visited', true);
    if (this.attrs.onFocusOut){
      this.attrs.onFocusOut();
    }
  },

  didInsertElement() {
    this._super(...arguments);
    // pad the errors element when an icon is present
    if (isPresent(this.get('icon'))) {
      this.$('> span').css('padding-left', '3rem');
    }
  },

  id: computed('elementId', function() {
    return `${this.get('elementId')}-input`;
  }),

  _setupLabel() {
    const $label = this.$('> label');
    if (isPresent(this.get('value')) && !$label.hasClass('active')) {
      $label.addClass('active');
    }
  }

});
