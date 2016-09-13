import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/md-card-content';

export default Component.extend({
  layout,

  classNames: ['card-content'],

  classNameBindings: ['class'],

  title: computed(function() {
    return this.get('parentView.title');
  }).volatile(),

  titleClass: computed(function() {
    return this.get('parentView.titleClass');
  }).volatile(),

  activator: computed(function() {
    return this.get('parentView.activator');
  }),

  cardTitleClass: computed('titleClass', function() {
    return this.get('titleClass') || 'black-text';
  })
});
