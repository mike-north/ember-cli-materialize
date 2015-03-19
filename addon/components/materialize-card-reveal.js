import Ember from 'ember';
import layout from '../templates/components/materialize-card-reveal';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['card-reveal'],
  classNameBinding: 'class',
  activatorBinding: 'parentView.activator'
});
