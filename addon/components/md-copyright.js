import Ember from 'ember';
import layout from '../templates/components/md-copyright';
import computed from 'ember-new-computed';

const { Component } = Ember;

export default Component.extend({
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
      const currentYear = new Date().getFullYear();
      const startYear = this.get('startYear');

      if (startYear === null || startYear === currentYear) {
        return `${currentYear}`;
      } else {
        return `${startYear} - ${currentYear}`;
      }
    }
  })
});
