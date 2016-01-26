import Ember from 'ember';
import MaterializeInput from './md-input';
import layout from '../templates/components/md-input-date';
import startOfUTCDay from '../utils/start-of-utc-day';

const {
  get
} = Ember;

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
      var options = {
        timestamp: evt.select,
        clear: evt.clear === null 
      }
      this._onDateSet(options);
    };
    var _onClose = () => {
      this.$('.picker').blur();
      this._onClose();
    };

    this.$('.datepicker').pickadate(Ember.$.extend(datePickerOptions, {
      onSet: _onDateSet,
      onClose: _onClose
    }));

    var selected = this.getDate(this.getAttr('selected'));
    var max = this.getDate(this.getAttr('max'), null, Infinity);
    var min = this.getDate(this.getAttr('min'), null, -Infinity);

    this.updateDatePicker({
      selected,
      min,
      max
    });
  },

  _onClose(){
    var onClose = this.getAttr('onClose');
    if (onClose) {
      onClose();
    }
  },

  _onDateSet(options) {
    var {timestamp, clear} = options;
    var onChange = this.getAttr('onChange');
    if (clear && onChange) {
      onChange(null);
      return;
    }
    var date = this.getDate(timestamp, this.getAttr('selected'));
    if (date && onChange) {
      onChange(date);
    }
  },

  _teardownPicker() {
    const $pickadate = this.$('.datepicker').data('pickadate');
    if ($pickadate) {
      $pickadate.stop();
    }
  },

  didUpdateAttrs(attrs) {
    this._super(...arguments);
    var currentSelected = get(attrs, 'oldAttrs.selected.value');
    var currentMin = get(attrs, 'oldAttrs.min.value');
    var currentMax = get(attrs, 'oldAttrs.max.value');
    var selected = get(attrs, 'newAttrs.selected.value');
    var max = get(attrs, 'newAttrs.max.value');
    var min = get(attrs, 'newAttrs.min.value');

    selected = this.getDate(selected, currentSelected);
    max = this.getDate(max, currentMax, Infinity);
    min = this.getDate(min, currentMin, -Infinity);
    this.updateDatePicker({
      selected,
      min,
      max
    });
  },

  getDate(input, compareWith= null, defaultResult = null) {
    var iMoment = startOfUTCDay(input);
    var compMoment = startOfUTCDay(compareWith);
    var isInputValid = iMoment.isValid();
    var isCompValid = compMoment.isValid();
    if (isInputValid && (!isCompValid || !iMoment.isSame(compareWith))) {
      return iMoment.toDate();
    } else {
      return !isInputValid ? defaultResult : null;
    }
  },

  updateDatePicker(options) {
    {selected, min, max} = options;
    if (selected) {
       this.$('.datepicker').pickadate('picker').set('select', selected);   
    }

    if (min && selected) {
       this.$('.datepicker').pickadate('picker').set('min', min);   
    }

    if (max && selected) {
       this.$('.datepicker').pickadate('picker').set('max', max);   
    }
  }
});
