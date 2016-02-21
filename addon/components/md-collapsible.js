import Ember from 'ember';
import layout from '../templates/components/md-collapsible';

const { deprecate, Component, computed} = Ember;

export default Component.extend({
  layout,
  tagName: 'li',
  classNameBindings: ['class'],
  actionArg: null,
  model: computed('actionArg', {
    get() {
      deprecate('md-collapsible#model is deprecated. Please use md-collapsible#actionArg instead');
      return this.get('actionArg');
    },
    set(key, val) {
      deprecate('md-collapsible#model is deprecated. Please use md-collapsible#actionArg instead');
      return this.set('actionArg', val);
    }
  }),
  actions: {
    headerClicked() {
      this.sendAction('action', this.get('actionArg'));
    }
  }
});
