import Ember from 'ember';
import layout from '../templates/components/materialize-card';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['card'],
  classNameBinding: 'class'
});
