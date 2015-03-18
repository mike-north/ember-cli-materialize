import Ember from 'ember';

export default Ember.Component.extend({
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
