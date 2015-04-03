import Ember from 'ember';
import layout from '../templates/components/materialize-collection-item';

export default Ember.Component.extend({
  beforeRender: function() {

  },
  layout: layout,
  tagName: 'li',
  isActive: false,
  classNames: ['collection-item'],
  classNameBindings: ['isActive:active'],
});
