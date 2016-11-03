import Ember from 'ember';
import layout from '../templates/components/md-dialog';

const { computed, Component, run: { next, later } } = Ember;

const computedJoin = function(prop) {
  return computed(prop, function() {
    return this.get(prop).join(' ');
  });
};

export default Component.extend({
  classNames: ['md-dialog'],
  concatenatedProperties: ['dialogClassNames'],
  dialogClassNames: [],
  _dialogClass: computedJoin('dialogClassNames'),
  translucentOverlay: true,
  layout,
  didInsertElement() {
    this._super(...arguments);
    next(() => {
      this.set('active', true);
    });
  },
  actions: {
    beginClose() {
      this.set('active', false);
      later(() => {
        this.sendAction('on-close');
      }, 300);
    }
  }
});
