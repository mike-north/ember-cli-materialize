import Ember from 'ember';
import layout from '../templates/components/md-card-collapsible';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ul',
  classNames: ['collapsible'],
  attributeBindings: ['data-collapsible'],
  accordion: true,

  'data-collapsible': Ember.computed(function() {
    return (this.get('accordion')) ? 'accordion' : 'expandable';
  }),

  didInsertElement() {
    this._super(...arguments);
    var isAccordion = this.get('accordion');
    this.$().collapsible({ accordion : isAccordion });
  },

  willDestroyElement: function() {
    var $panel_headers = this.$().find('> li > .collapsible-header');
    this.$().off('click.collapse', '.collapsible-header');
    $panel_headers.off('click.collapse');
  }
});
