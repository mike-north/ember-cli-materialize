import { deprecate } from '@ember/application/deprecations';
import Component from '@ember/component';
import layout from '../templates/components/md-collapsible';
import _computed from 'ember-new-computed';

export default Component.extend({
  layout,
  tagName: 'li',
  classNameBindings: ['class'],
  actionArg: null,
  model: _computed('actionArg', {
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
