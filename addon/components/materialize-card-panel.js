import Ember from 'ember';
import layout from '../templates/components/materialize-card-panel';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['card-panel'],
  classNameBinding: 'class'
});

