import Ember from 'ember';
import layout from '../templates/components/md-nav-menu';

const { Component } = Ember;

export default Component.extend({
  classNames: ['md-nav-menu'],
  layout,
  tagName: 'ul'
});
