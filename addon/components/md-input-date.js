import Ember from 'ember';
import MaterializeInput from './md-input';
import layout from '../templates/components/md-input-date';

export default MaterializeInput.extend({
  layout,

  selectMonths: true,
  numberOfYears: 15,
  min: '',
  max: '',
  autoFormat: true,
  dateFormat: 'DD MMMM[,] YYYY',

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
      this._onDateSet(evt.select);
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
    var date = timestamp || null;
    if (date && this.get('autoFormat')) {
      date = window.moment(date).format(this.get('dateFormat')); 
    }
    if (onChange) {
      onChange(date);
    } else {
      this.set('value', date);
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
