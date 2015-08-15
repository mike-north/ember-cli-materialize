import Ember from 'ember';
import layout from '../templates/components/md-card-collapsible';
import computed from 'ember-new-computed';

const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['collapsible'],
  attributeBindings: ['data-collapsible'],
  accordion: true,

  'data-collapsible': computed({
    get() {
      return this.get('accordion') ? 'accordion' : 'expandable';
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    this._setupCollapsible();
  },

  _setupCollapsible() {
    const accordion = this.get('accordion');
    this.$().collapsible({ accordion });
  },

  _teardownCollapsible() {
    const $panel_headers = this.$('> li > .collapsible-header');
    this.$().off('click.collapse', '.collapsible-header');
    $panel_headers.off('click.collapse');
  },

  willDestroyElement() {
    this._super(...arguments);
    this._teardownCollapsible();
  }
});
