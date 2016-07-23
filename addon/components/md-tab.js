import Ember from 'ember';
import layout from '../templates/components/md-tab';
import Tab from '../mixins/md-tab-base';

const { Component } = Ember;

export default Component.extend(Tab, {
  classNames: ['md-tab', 'tab'],
  classNameBindings: ['active'],
  tagName: 'li',
  active: false,
  layout
});
