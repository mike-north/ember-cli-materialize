import Ember from 'ember';
import MaterializeInputField from './materialize-input-field';
import layout from '../templates/components/materialize-select';

export default MaterializeInputField.extend({
  layout: layout,

  didInsertElement: function() {
    this._super(...arguments);
    this.$('select').material_select();
  },

  errorsDidChange: Ember.observer('errors', function() {
    var inputSelector = this.$('input');
    // monitor the select's validity and copy the appropriate validation class to the materialize input element.
    Ember.run.later(this, function() {
      var isValid = this.$('select').hasClass('valid');
      if (isValid) {
        inputSelector.removeClass('invalid');
        inputSelector.addClass('valid');
      } else {
        inputSelector.removeClass('valid');
        inputSelector.addClass('invalid');
      }
    }, 150);
  })
});
