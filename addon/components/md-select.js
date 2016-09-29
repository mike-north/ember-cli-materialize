import Ember from 'ember';
import MaterializeInputField from './md-input-field';
import layout from '../templates/components/md-select';

const { computed, A, observer, isNone, run: { later }, get } = Ember;

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

  _parsedContent: computed('optionValuePath', 'optionLabelPath', 'content.[]', function() {
    const contentRegex = /(content\.|^content$)/;
    // keep backwards compatability for defining optionValuePath & as optionContentPath `content.{{attName}}`
    const optionValuePath = (this.get('optionValuePath') || '').replace(contentRegex, '');
    const optionLabelPath = (this.get('optionLabelPath') || '').replace(contentRegex, '');
    return A((this.get('content') || []).map((option) => {
      return {
        value: optionValuePath ? get(option, optionValuePath) : option,
        label: optionLabelPath ? get(option, optionLabelPath) : option
      };
    }));
  }),

  // TODO: clean up any listeners that $.select() puts in place
  // _teardownSelect() {
  //
  // }

  // TODO: this could be converted to a computed property, returning a string
  //  that is bound to the class attribute of the inputSelector
  errorsDidChange: observer('errors', function() {
    const inputSelector = this.$('input');
    // monitor the select's validity and copy the appropriate validation class to the materialize input element.
    if (!isNone(inputSelector)) {
      later(this, function() {
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
