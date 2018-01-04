import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import layout from '../templates/components/md-card-content';

export default Component.extend({
  layout,

  classNames: ['card-content'],

  classNameBindings: ['class'],
  title: alias('parentView.title'),
  titleClass: alias('parentView.titleClass'),
  activator: alias('parentView.activator'),

  cardTitleClass: computed('titleClass', function() {
    return this.get('titleClass') || 'black-text';
  })
});
