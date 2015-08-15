import Ember from 'ember';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import MdTabs from './md-tabs';
import layout from '../templates/components/md-tab';

const { Component, computed, computed: { oneWay } } = Ember;

export default Component.extend(ChildComponentSupport, {
  _parentComponentTypes: [MdTabs],
  tagName: 'li',
  layout,

  classNames: ['materialize-tabs-tab', 'tab', 'col'],
  classNameBindings: ['_colClass'],

  colWidth: oneWay('composableParent.colWidth'),

  click() {
    this.get('composableParent').send('tabClicked', this);
  },

  _colClass: computed('colWidth', function() {
    return `s${this.get('colWidth')}`;
  })

});
