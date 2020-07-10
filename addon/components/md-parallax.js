import Component from '@ember/component';
import layout from '../templates/components/md-parallax';
import jQuery from 'jquery';

export default Component.extend({
  layout,
  classNames: ['parallax-container'],

  didInsertElement() {
    this._super(...arguments);
    this._setupParallax();
  },

  _setupParallax() {
    jQuery('.parallax').parallax();
  }

  // TODO: unregister any listeners that $.parallax() registers
  // _teardownParallax() {
  //
  // }
});
