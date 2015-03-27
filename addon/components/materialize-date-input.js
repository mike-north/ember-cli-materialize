import MaterializeInput from './materialize-input';
import layout from '../templates/components/materialize-date-input';

export default MaterializeInput.extend({
  layout: layout,
  selectMonths: true,
  numberOfYears: 15,
  min: '',
  max: '',
  didInsertElement: function() {
    this._super();
    var self = this;
    this.$('.datepicker').pickadate({
      selectMonths: self.selectMonths,
      selectYears: self.numberOfYears,
      min: self.min,
      max: self.max
    });
  }
});
