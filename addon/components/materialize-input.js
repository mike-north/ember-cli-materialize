import Ember from 'ember';
import layout from '../templates/components/materialize-input';

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
  layout: layout,
  tagName: 'div',
  classNames: ['input-field'],
  validate: false,
  id: Ember.computed(function() {
    var elementId = this.get('elementId');
    return elementId + '-input';
  }),
  didInsertElement: function() {
    // make sure the label moves when a value is bound.
    var labelSelector = this.$('>label');
    if (Ember.isPresent(this.get('value')) && !labelSelector.hasClass('active')) {
      labelSelector.addClass('active');
      labelSelector.trigger('validate');
    }
    // add icon prefix if necessary
    var icon = this.get('icon');
    var iconSelector = this.$('>i');
    if (Ember.isPresent(icon)) {
      iconSelector.addClass(icon);
      iconSelector.addClass('prefix');
    }
  }
});

