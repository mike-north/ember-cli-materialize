import Ember from 'ember';
import layout from '../templates/components/materialize-range';

export default Ember.Component.extend({
  min: 0,
  max: 100,
  step: 5,
  layout: layout,
  classNames: ['range-field']
});
