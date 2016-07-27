import Ember from 'ember';
import layout from '../templates/components/md-card-reveal';

const { Component, computed: { alias } } = Ember;

export default Component.extend({
  layout,
  tagName: 'div',

  classNames: ['card-reveal'],
  classNameBindings: ['class'],
  activator: alias('parentView.activator')
});
