import Ember from 'ember';
import layout from '../templates/components/md-copyright';

export default Ember.Component.extend({
  init: function() {
    this._super(...arguments);
    if (this.get('startYear') !== null) {
      Ember.assert('Property startYear must be less than or equal to the current year.',
        this.get('startYear') <= new Date().getFullYear());
    }
  },
  layout: layout,
  classNames: ['footer-copyright'],
  startYear: null,
  text: null,
  date: Ember.computed(function () {
    var currentYear = new Date().getFullYear();
    var returnDate;
    if (this.get('startYear') === null || this.get('startYear') === currentYear) {
      returnDate = currentYear;
    } else {
      returnDate = this.get('startYear') + ' - ' + currentYear;
    }
    return returnDate;
  }).readOnly()
});
