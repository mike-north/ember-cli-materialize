import Ember from 'ember';
import layout from '../templates/components/md-card-panel';

const { Component } = Ember;

export default Component.extend({
  layout,

  classNames: ['card-panel'],
  classNameBindings: ['class']
});

