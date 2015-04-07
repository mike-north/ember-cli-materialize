import Ember from 'ember';
import layout from '../templates/components/materialize-copyright';

export default Ember.Component.extend({
  init: function() {
    this._super();
    if (this.get('startYear') != null) {
      Ember.assert('Property startYear must be less than or equal to the current year.',
        this.get('startYear') <= new Date().getFullYear());
    }
  },
  layout: layout,
  classNames: ['footer-copyright'],
  date: function () {
    var returnDate;
    if (this.get('startYear') === null || this.get('startYear') === new Date().getFullYear()) {
      returnDate = new Date().getFullYear();
    } else {
      returnDate = this.get('startYear') + ' - ' + new Date().getFullYear();
    }
    return returnDate;
  }.property()
});
