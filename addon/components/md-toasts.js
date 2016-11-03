import Ember from 'ember';
import layout from '../templates/components/md-toasts';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['md-toasts'],
  layout,
  reversedFlashQueue: computed('flashMessages.arrangedQueue.[]', function() {
    return this.get('flashMessages.arrangedQueue').reverse();
  })
});
