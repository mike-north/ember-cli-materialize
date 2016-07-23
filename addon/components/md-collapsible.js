import Ember from 'ember';
import layout from '../templates/components/md-collapsible';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['md-collapsible', 'collapsible'],
  classNameBindings: ['popout:popout'],
  attributeBindings: ['data-collapsible'],
  tagName: 'ul',
  accordion: false,
  popout: false,
  layout,
  'data-collapsible': computed('accordion', function() {
    return this.get('accordion') ? 'accordion' : 'expandable';
  }),
  didInsertElement() {
    this._super(...arguments);
    this.$().collapsible({
      accordion: this.get('accordion')
    });
  }
});
