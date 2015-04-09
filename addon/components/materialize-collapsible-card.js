import Ember from 'ember';
import layout from '../templates/components/materialize-collapsible-card';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ul',
  classNames: ['collapsible'],
  attributeBindings: ['data-collapsible'],
  accordion: true,

  'data-collapsible': Ember.computed(function() {
    return (this.get('accordion')) ? 'accordion' : 'expandable';
  }),

  didInsertElement: function() {
    this._super(...arguments);
    var isAccordion = this.get('accordion');
    this.$().collapsible({ accordion : isAccordion });
  }
});
