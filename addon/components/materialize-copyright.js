import Ember from 'ember';
import layout from '../templates/components/materialize-copyright';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['footer-copyright'],
  date: function () {
    return new Date().getFullYear();
  }.property()
});
