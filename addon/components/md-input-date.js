import MaterializeInput from './md-input';
import layout from '../templates/components/md-input-date';

export default MaterializeInput.extend({
  layout: layout,
  selectMonths: true,
  numberOfYears: 15,
  min: '',
  max: '',

  didInsertElement() {
    this._super(...arguments);

    var datePickerOptions = this.getProperties('selectMonths', 'numberOfYears', 'min', 'max');
    datePickerOptions.selectYears = datePickerOptions.numberOfYears;
    this.$('.datepicker').pickadate(datePickerOptions);
  },

  willDestroyElement: function() {
    var $pickadate = this.$('.datepicker').data('pickadate');

    if ($pickadate) {
      $pickadate.stop();
    }
  }
});
