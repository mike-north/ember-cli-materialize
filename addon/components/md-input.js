import Ember from 'ember';
import layout from '../templates/components/md-input';
import TextComponent from '../mixins/text-component';

const { Component } = Ember;

export default Component.extend(TextComponent, {
  classNames: ['md-input', 'input-field'],
  type: 'text',
  layout
});
