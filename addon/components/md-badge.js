import Ember from 'ember';
import layout from '../templates/components/md-badge';

const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: 'span',
  text: null,
  classNames: ['badge']
});
