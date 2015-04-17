import Ember from 'ember';

export default Ember.Component.extend({

  bindAttributes: ['disabled', 'readonly'],
  classNames: ['input-field'],
  validate: false,

  init() {
    this._super(...arguments);
    // bind validation errors
    //TODO: This is private API usage, which may bite us when glimmer arrives
    //  We should find some less brittle way of introspecting the binding path,
    //  or propose a framework modification to support this in the long term
    var propertyPath = this.get('valueBinding._label');
    if (Ember.isPresent(propertyPath)) {
      Ember.Binding.from('targetObject.errors.' + propertyPath)
        .to('errors')
        .connect(this);
    }
  },

  didInsertElement() {
    this._super(...arguments);
    // pad the errors element when an icon is present
    if (Ember.isPresent(this.get('icon'))) {
      this.$('>span').css('padding-left', '3rem');
    }
  },

  id: Ember.computed(function() {
    return `${this.get('elementId')}-input`;
  })

});
