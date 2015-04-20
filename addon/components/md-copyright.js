import Ember from 'ember';
import layout from '../templates/components/md-copyright';
import computed from 'ember-new-computed';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['footer-copyright'],

  init() {
    this._super(...arguments);
    Ember.assert('Property startYear must be less than or equal to the current year.',
      this.get('startYear') === null ||
      this.get('startYear') <= new Date().getFullYear());
  },

  startYear: null,
  text: null,

  date: computed({
    get() {
      var currentYear = new Date().getFullYear();
      var startYear = this.get('startYear');

      if (startYear === null || startYear === currentYear) {
        return '' + currentYear;
      } else {
        return `${startYear} - ${currentYear}`;
      }
    }
  })
});
