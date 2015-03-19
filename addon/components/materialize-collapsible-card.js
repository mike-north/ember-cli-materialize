import Ember from 'ember';
import layout from '../templates/components/materialize-collapsible-card';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ul',
  classNames: ['collapsible'],
  attributeBindings: ['data-collapsible'],
  'data-collapsible': function() {
    return (this.get('accordion')) ? 'accordion' : 'expandable';
  }.property(),
  accordion: true,
  didInsertElement: function() {
    var isAccordion = this.get('accordion');
    this.$().collapsible({ accordion : isAccordion });
  }
});
