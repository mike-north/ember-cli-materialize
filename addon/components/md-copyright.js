import Ember from 'ember';
import layout from '../templates/components/md-copyright';

const { Component, computed, assert } = Ember;

export default Component.extend({
  layout,
  classNames: ['footer-copyright'],

  init() {
    this._super(...arguments);
    assert('Property startYear must be less than or equal to the current year.',
      this.get('startYear') === null
      || this.get('startYear') <= new Date().getFullYear());
  },

  startYear: null,
  text: null,

  date: computed(function() {
    let currentYear = new Date().getFullYear();
    let startYear = this.get('startYear');

    if (startYear === null || startYear === currentYear) {
      return `${currentYear}`;
    } else {
      return `${startYear} - ${currentYear}`;
    }
  })
});
