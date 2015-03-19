import Ember from 'ember';
import layout from '../templates/components/materialize-collapsible';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  classNameBindings: 'class'
});
