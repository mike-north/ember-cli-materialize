import Ember from 'ember';
import MaterializeInput from './md-input';
import layout from '../templates/components/md-input-date';

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
      this._onDateSet(evt.select);
    };
    var _onClose = () => {
      this.$('.picker').blur();
      this._onClose();
    };

    var isValidDate = window.moment(this.get('selected')).isValid();

    this.$('.datepicker').pickadate(Ember.$.extend(datePickerOptions, {
      onSet: _onDateSet,
      onClose: _onClose,
      min: this.get('min') || -Infinity,
      max: this.get('max') || Infinity,
      select: isValidDate ? window.moment(this.get('selected')).toDate().toString : null
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
    var date = timestamp ? window.moment(timestamp).startOf('day').toDate() : null;
    if (window.moment(date).isValid() && !window.moment(date).isSame(this.getAttr('selected')) && onChange) {
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
    if (window.moment(selected).isValid() && !window.moment(selected).isSame(currentSelected)) {
       this.$('.datepicker').pickadate('picker').set('select', window.moment(selected).toDate());   
    }
    if (min && !window.moment(min).isSame(currentMin)) {
       this.$('.datepicker').pickadate('picker').set('min', min);   
    } else if (!min && min !== currentMin) {
      this.$('.datepicker').pickadate('picker').set('min', -Infinity);   
    }
    if (max && !window.moment(max).isSame(currentMax)) {
       this.$('.datepicker').pickadate('picker').set('max', max || Infinity);   
    } else if (!max && max !== currentMax) {
      this.$('.datepicker').pickadate('picker').set('max', Infinity);   
    }
  }

});
