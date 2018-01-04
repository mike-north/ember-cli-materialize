import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import layout from '../templates/components/md-card-reveal';

export default Component.extend({
  layout,
  tagName: 'div',

  classNames: ['card-reveal'],
  classNameBindings: ['class'],
  activator: alias('parentView.activator')
});
