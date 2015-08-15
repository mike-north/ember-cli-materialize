import Ember from 'ember';
import layout from '../templates/components/md-range';

const { Component } = Ember;

export default Component.extend({
  layout,

  classNames: ['range-field'],

  min: 0,
  max: 100,
  step: 5
});
