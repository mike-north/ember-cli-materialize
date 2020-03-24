import { A } from '@ember/array';
import { isNone } from '@ember/utils';
import { later } from '@ember/runloop';
import { get, observer, computed } from '@ember/object';
import MaterializeInputField from './md-input-field';
import layout from '../templates/components/md-select';
import jQuery from 'jquery';

export default MaterializeInputField.extend({
  layout,
  classNames: ['md-select'],
  optionLabelPath: 'content',
  optionValuePath: 'content',

  didRender() {
    this._super(...arguments);
    this._setupSelect();
  },

  willUpdate() {
    this._teardownSelect();
  },

  willDestroyElement() {
    this._teardownSelect();
  },

  _setupSelect() {
    // jscs: disable
    jQuery('select').material_select();
    // jscs: enable
  },

  _parsedContent: computed('optionValuePath', 'optionLabelPath', 'content.[]', function() {
    const contentRegex = /(content\.|^content$)/;
    // keep backwards compatability for defining optionValuePath & as optionContentPath `content.{{attName}}`
    const optionValuePath = (this.get('optionValuePath') || '').replace(contentRegex, '');
    const optionLabelPath = (this.get('optionLabelPath') || '').replace(contentRegex, '');
    return A(
      (this.get('content') || []).map(option => {
        return {
          value: optionValuePath ? get(option, optionValuePath) : option,
          label: optionLabelPath ? get(option, optionLabelPath) : option
        };
      })
    );
  }),

  _teardownSelect() {
    // jscs: disable
    jQuery('select').material_select('destroy');
    // jscs: enable
  },

  actions: {
    optionSelected(e) {
      const target = e.target;
      if (!this.get('isDisabled')) {
        if (this.get('action')) {
          this.sendAction('action', target.value);
        }
        else {
          this.set('value', target.value)
        }
      }
    }
  },

  // TODO: this could be converted to a computed property, returning a string
  //  that is bound to the class attribute of the inputSelector
  errorsDidChange: observer('errors', function() {
    const inputSelector = jQuery('input');
    // monitor the select's validity and copy the appropriate validation class to the materialize input element.
    if (!isNone(inputSelector)) {
      later(
        this,
        function() {
          const isValid = jQuery('select').hasClass('valid');
          if (isValid) {
            inputSelector.removeClass('invalid');
            inputSelector.addClass('valid');
          } else {
            inputSelector.removeClass('valid');
            inputSelector.addClass('invalid');
          }
        },
        150
      );
    }
  })
});
