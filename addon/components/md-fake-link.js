import Ember from 'ember';
import layout from '../templates/components/md-fake-link';
import ClickAction from '../mixins/click-action';
import DropdownTrigger from '../mixins/dropdown-trigger';

const { Component } = Ember;

export default Component.extend(ClickAction, DropdownTrigger, {
  classNames: ['md-fake-link'],
  iconClass: 'left',
  layout,
  tagName: 'li'
});
