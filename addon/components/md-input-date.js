import $ from 'jquery';
import MaterializeInput from './md-input';
import layout from '../templates/components/md-input-date';
import jQuery from 'jquery';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function formatDate(timestamp) {
  const d = new Date(timestamp);
  return `${d.getDate()} ${MONTH_NAMES[d.getMonth()]}, ${d.getFullYear()}`;
}

export default MaterializeInput.extend({
  layout,

  selectMonths: true,
  numberOfYears: 15,
  min: '',
  max: '',

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

    this._onDateSet = evt => {
      if (evt.select) {
        this.set('value', formatDate(evt.select));
      }
    };

    jQuery('.datepicker').pickadate(
      $.extend(datePickerOptions, {
        onSet: this._onDateSet
      })
    );
  },

  _teardownPicker() {
    const $pickadate = jQuery('.datepicker').data('pickadate');
    if ($pickadate) {
      $pickadate.stop();
    }
  }
});
