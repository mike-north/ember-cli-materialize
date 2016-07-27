import Ember from 'ember';
import layout from '../templates/components/md-card';

const { Component } = Ember;

export default Component.extend({
  layout,
  classNames: ['card'],
  classNameBindings: ['class']
});
