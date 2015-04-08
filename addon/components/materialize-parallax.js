import Ember from 'ember';
import layout from '../templates/components/materialize-parallax';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['parallax-container'],

  didInsertElement: function() {
    this._super(...arguments);
    this.$('.parallax').parallax();
  }
});
