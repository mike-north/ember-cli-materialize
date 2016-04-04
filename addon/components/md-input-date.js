import Ember from 'ember';
import MaterializeInput from './md-input';
import layout from '../templates/components/md-input-date';
import moment from 'moment';

const { computed } = Ember;

export default MaterializeInput.extend({
  layout,

  selectMonths: true,
  numberOfYears: 15,
  min: '',
  max: '',
  format: 'DD MMM, YYYY',

  _displayValue: computed('value', function() {
    const valueDate = this.get('value');
    const displayFormat = this.get('format');
    return typeof displayFormat === 'function' ?
      displayFormat(value) : moment(valueDate).format(displayFormat);
  }),

  didInsertElement() {
    this._super(...arguments);
    this._setupPicker();
  },

  willDestroyElement() {
    this._super(...arguments);
    this._teardownPicker();
  },

  _setupPicker() {
    const datePickerOptions = this.getProperties('selectMonths', 'numberOfYears', 'min', 'max');
    datePickerOptions.selectYears = datePickerOptions.numberOfYears;
    datePickerOptions.format = this._parseToUiFormat(this.get('format'));

    this._onDateSet = evt => {
      if (evt.select) {
        this.set('value', evt.select);
      }
    };

    this.$('.datepicker').pickadate(Ember.$.extend(datePickerOptions, {
      onSet: this._onDateSet
    }));
  },

  _parseToUiFormat(format) {
    //parse to pickadate.js format
    return format && typeof format !== 'function' ?
      format.replace(/\b([DMY]+)\b/g, (match) => match.toLowerCase()) : undefined;
  },

  _teardownPicker() {
    const $pickadate = this.$('.datepicker').data('pickadate');
    if ($pickadate) {
      $pickadate.stop();
    }
  }
});
