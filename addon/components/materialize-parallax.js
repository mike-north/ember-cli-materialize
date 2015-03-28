import Ember from 'ember';
import layout from '../templates/components/materialize-parallax';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['parallax-container'],
  didInsertElement: function() {
    this.$('.parallax').parallax();
  }
});
