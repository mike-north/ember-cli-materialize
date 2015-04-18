import Ember from 'ember';
import layout from '../templates/components/md-badge';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  text: null,
  classNames: ['badge']
});
