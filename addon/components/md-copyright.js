import Component from '@ember/component';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';
import layout from '../templates/components/md-copyright';

export default Component.extend({
  layout,
  classNames: ['footer-copyright'],

  init() {
    this._super(...arguments);
    assert(
      'Property startYear must be less than or equal to the current year.',
      this.get('startYear') === null || this.get('startYear') <= new Date().getFullYear()
    );
  },

  startYear: null,
  text: null,

  date: computed(function() {
    const currentYear = new Date().getFullYear();
    const startYear = this.get('startYear');

    if (startYear === null || startYear === currentYear) {
      return `${currentYear}`;
    } else {
      return `${startYear} - ${currentYear}`;
    }
  })
});
