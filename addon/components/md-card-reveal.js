import Ember from 'ember';
import layout from '../templates/components/md-card-reveal';

const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: 'div',

  classNames: ['card-reveal'],
  classNameBinding: 'class',
  activatorBinding: 'parentView.activator'
});
