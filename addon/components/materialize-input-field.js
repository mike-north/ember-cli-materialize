import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    this._super();
    // bind validation errors
    var propertyPath = this.get('valueBinding._label');
    if (Ember.isPresent(propertyPath)) {
      Ember.Binding.from('targetObject.errors.' + propertyPath)
        .to('errors')
        .connect(this);
    }
  },
  bindAttributes: ['disabled', 'readonly'],
  tagName: 'div',
  classNames: ['input-field'],
  validate: false,
  id: Ember.computed(function() {
    var elementId = this.get('elementId');
    return elementId + '-input';
  }),
  didInsertElement: function() {
    // pad the errors element when an icon is present
    if (Ember.isPresent(this.get('icon'))) {
      this.$('>span').css('padding-left', '3rem');
    }
  }
});
