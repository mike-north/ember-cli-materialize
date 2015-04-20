import Ember from 'ember';
import layout from '../templates/components/md-parallax';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['parallax-container'],

  didInsertElement() {
    this._super(...arguments);
    this._setupParallax();
  },

  _setupParallax() {
    this.$('.parallax').parallax();
  },

  //TODO: unregister any listeners that $.parallax() registers
  // _teardownParallax() {
  //
  // }
});
