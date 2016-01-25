import Ember from 'ember';
import MaterializeInput from './md-input';
import layout from '../templates/components/md-input-date';

const MONTH_NAMES = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];

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

    var _onDateSet = evt => {
      if (evt.select) {
        this._onDateSet(evt.select);
      }
    };
    var _onClose = () => {
      this.$('.picker').blur();
      this._onClose();
    };

    this.$('.datepicker').pickadate(Ember.$.extend(datePickerOptions, {
      onSet: _onDateSet,
      onClose: _onClose
    }));
  },

  _onClose(){
    var onClose = this.getAttr('onClose');
    if (onClose) {
      onClose();
    }
  },

  _onDateSet(timestamp) {
    var onChange = this.getAttr('onChange');
    var formatted = formatDate(timestamp);
    if (onChange) {
      onChange(formatted);
    } else {
      this.set('value', formatted)
    }
  },

  _teardownPicker() {
    const $pickadate = this.$('.datepicker').data('pickadate');
    if ($pickadate) {
      $pickadate.stop();
    }
  },

  setMinDate: Ember.observer('min', function() {
    this.$('.datepicker').pickadate('picker').set('min', this.get('min'));
  }),
  setMaxDate: Ember.observer('max', function() {
    this.$('.datepicker').pickadate('picker').set('max', this.get('max'));
  })

});
