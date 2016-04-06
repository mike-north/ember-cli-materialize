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
  format: 'DD MMM, YYYY', //moment format
  pickadateOpt: {}, //from http://amsul.ca/pickadate.js/date/

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
      //clear event - Object {clear: null}
      //set event - Object {select: date_value}
      this.set('value', evt.select ? evt.select : null );
    };
    datePickerOptions.onSet = this._onDateSet;

    const userPickadateOpt = this.get('pickadateOpt');
    this.$('.datepicker').pickadate(Ember.$.extend(datePickerOptions, userPickadateOpt));
  },

  _parseToUiFormat(format) {
    //parse moment format to pickadate.js format

    //doesn't support pickatime - only date format
    //this.$('.datepicker').pickatime();
    //format.replace(/\bmm\b/g, 'ii')
    //      .replace(/\bm\b/g, 'i')
    //      .replace(/\bhh\b/g, 'HH')
    //      .replace(/\bh\b/g, 'H')

    return format && typeof format === 'function' ? format() :
      format.replace(/\b([mhs]+)\b/g, '')
            .replace(/\b([DMY]+)\b/g, (match) => match.toLowerCase());
  },

  _teardownPicker() {
    const $pickadate = this.$('.datepicker').data('pickadate');
    if ($pickadate) {
      $pickadate.stop();
    }
  }
});
