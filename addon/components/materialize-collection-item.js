import Ember from 'ember';
import layout from '../templates/components/materialize-collection-item';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  isActive: false,
  isHeader: false,
  classNameBindings: ['isActive:active', 'isHeader:collection-header:collection-item'],
});
