import Ember from 'ember';
import MaterializeInputField from './md-input-field';
import layout from '../templates/components/md-select';

export default MaterializeInputField.extend({
  layout,
  classNames: ['md-select'],
  optionLabelPath: 'content',
  optionValuePath: 'content',

  didInsertElement() {
    this._super(...arguments);
    this._setupSelect();
  },

  _setupSelect() {
    // jscs: disable
    this.$('select').material_select();
    // jscs: enable
  },

  // TODO: clean up any listeners that $.select() puts in place
  // _teardownSelect() {
  //
  // }

  // TODO: this could be converted to a computed property, returning a string
  //  that is bound to the class attribute of the inputSelector
  errorsDidChange: Ember.observer('errors', function() {
    const inputSelector = this.$('input');
    // monitor the select's validity and copy the appropriate validation class to the materialize input element.
    if (!Ember.isNone(inputSelector)) {
      Ember.run.later(this, function() {
        const isValid = this.$('select').hasClass('valid');
        if (isValid) {
          inputSelector.removeClass('invalid');
          inputSelector.addClass('valid');
        } else {
          inputSelector.removeClass('valid');
          inputSelector.addClass('invalid');
        }
      }, 150);
    }
  })
});
