import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['input-field', 'col'],
  classNameBindings: ['numberOfColumns'],
  label: '',
  validate: false,
  type: 'text',
  cols: 12,

  numberOfColumns: Ember.computed('cols', function() {
    var cols = this.get('cols');
    return 's' + cols;
  }),

  inputId: Ember.computed(function() {
    var elementId = this.get('elementId');
    return elementId + '-input';
  })
});
