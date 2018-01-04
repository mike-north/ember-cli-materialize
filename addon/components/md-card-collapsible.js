import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/md-card-collapsible';

export default Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['collapsible'],
  attributeBindings: ['data-collapsible'],
  accordion: true,

  'data-collapsible': computed(function() {
    return this.get('accordion') ? 'accordion' : 'expandable';
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
    const $panelHeaders = this.$('> li > .collapsible-header');
    this.$().off('click.collapse', '.collapsible-header');
    $panelHeaders.off('click.collapse');
  },

  willDestroyElement() {
    this._super(...arguments);
    this._teardownCollapsible();
  }
});
