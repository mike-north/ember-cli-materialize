import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/md-card-collapsible';
import jQuery from 'jquery';

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
    jQuery().collapsible({ accordion });
  },

  _teardownCollapsible() {
    const $panelHeaders = jQuery('> li > .collapsible-header');
    jQuery().off('click.collapse', '.collapsible-header');
    $panelHeaders.off('click.collapse');
  },

  willDestroyElement() {
    this._super(...arguments);
    this._teardownCollapsible();
  }
});
