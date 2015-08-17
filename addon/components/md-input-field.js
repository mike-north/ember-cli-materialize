import Ember from 'ember';

const { Component, computed, isPresent } = Ember;

export default Component.extend({
  classNames: ['input-field'],

  bindAttributes: ['disabled', 'readonly', 'autofocus'],
  validate: false,

  errorsPath: 'errors',

  init() {
    this._super(...arguments);
    // bind validation errors
    // TODO: This is private API usage, which may bite us when glimmer arrives
    //  We should find some less brittle way of introspecting the binding path,
    //  or propose a framework modification to support this in the long term
    const propertyPath = this.get('valueBinding._label');
    if (isPresent(propertyPath)) {
      Ember.Binding.from(`targetObject.${this.get('errorsPath')}.${propertyPath}`)
        .to('errors')
        .connect(this);
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
