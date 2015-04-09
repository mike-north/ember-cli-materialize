import Ember from 'ember';

export default Ember.Component.extend({

  bindAttributes: ['disabled', 'readonly'],
  classNames: ['input-field'],
  validate: false,

  init: function() {
    this._super(...arguments);
    // bind validation errors
    var propertyPath = this.get('valueBinding._label');
    if (Ember.isPresent(propertyPath)) {
      Ember.Binding.from('targetObject.errors.' + propertyPath)
        .to('errors')
        .connect(this);
    }
  },

  didInsertElement: function() {
    this._super(...arguments);
    // pad the errors element when an icon is present
    if (Ember.isPresent(this.get('icon'))) {
      this.$('>span').css('padding-left', '3rem');
    }
  },

  id: Ember.computed(function() {
    var elementId = this.get('elementId');
    return elementId + '-input';
  })

});
