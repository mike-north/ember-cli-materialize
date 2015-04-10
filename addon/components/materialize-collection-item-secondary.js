import Ember from 'ember';
import layout from '../templates/components/materialize-collection-item-secondary';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'a',
  linkTo: '#',
  classNames: ['secondary-content'],
  attributeBindings: ['linkTo:href'],
});
