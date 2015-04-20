import Ember from 'ember';
import computed from 'ember-new-computed';

export default Ember.Component.extend({
  classNames: ['input-field'],

  bindAttributes: ['disabled', 'readonly'],
  validate: false,

  errorsPath: 'errors',

  init() {
    this._super(...arguments);
    // bind validation errors
    //TODO: This is private API usage, which may bite us when glimmer arrives
    //  We should find some less brittle way of introspecting the binding path,
    //  or propose a framework modification to support this in the long term
    var propertyPath = this.get('valueBinding._label');
    if (Ember.isPresent(propertyPath)) {
      Ember.Binding.from(`targetObject.${this.get('errorsPath')}.${propertyPath}`)
        .to('errors')
        .connect(this);
    }
  },

  didInsertElement() {
    this._super(...arguments);
    // pad the errors element when an icon is present
    if (Ember.isPresent(this.get('icon'))) {
      this.$('> span').css('padding-left', '3rem');
    }
  },

  id: computed('elementId', {
    get() {
      return `${this.get('elementId')}-input`;
    }
  }),

  _setupLabel() {
    var labelSelector = this.$('> label');
    if (Ember.isPresent(this.get('value')) && !labelSelector.hasClass('active')) {
      labelSelector.addClass('active');
    }
  }

});
