import Ember from 'ember';
import layout from '../templates/components/materialize-collection-item';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  isActive: false,
  isHeader: false,
  isDismissable: false,
  image: '',
  imageAlt: '',
  title: '',
  classNameBindings: ['isActive:active', 'isHeader:collection-header:collection-item', 'image:avatar', 'isDismissable:dismissable'],
});
