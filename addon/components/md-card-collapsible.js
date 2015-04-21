import Ember from 'ember';
import layout from '../templates/components/md-card-collapsible';
import computed from 'ember-new-computed';

export default Ember.Component.extend({
  layout: layout,
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
    this.$().collapsible({ accordion : this.get('accordion') });
  },

  _teardownCollapsible() {
    var $panel_headers = this.$('> li > .collapsible-header');
    this.$().off('click.collapse', '.collapsible-header');
    $panel_headers.off('click.collapse');
  },

  willDestroyElement() {
    this._super(...arguments);
    this._teardownCollapsible();
  }
});
