import Ember from 'ember';
import layout from '../templates/components/md-btn';
import Button from '../mixins/md-button';
import DropdownTrigger from '../mixins/dropdown-trigger';

const { Component } = Ember;

export default Component.extend(Button, DropdownTrigger, {
  classNames: ['md-btn'],
  tagName: 'button',
  layout
});
