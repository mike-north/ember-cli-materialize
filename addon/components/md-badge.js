import Component from '@ember/component';
import layout from '../templates/components/md-badge';

export default Component.extend({
  layout,
  tagName: 'span',
  text: null,
  classNames: ['badge']
});
