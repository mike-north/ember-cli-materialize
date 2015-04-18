import Ember from 'ember';
import layout from '../templates/components/md-tab';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  classNames: ['materialize-tabs-tab', 'tab', 'col'],
  classNameBindings: ['_colClass'],

  colWidth: Ember.computed.alias('_tabSet.colWidth'),

  _colClass: Ember.computed('colWidth', function () {
    return 's' + this.get('colWidth');
  }),

  _tabSet: Ember.computed(function () {
    return this.nearestWithProperty('___materializeTabs');
  }),

  _active: Ember.computed('_tabSet.selected', 'value', function () {
    return this.get('_tabSet.selected') === this.get('value');
  }),

  click() {
    this.trigger('tabClicked', this);
  },

  didInsertElement() {
    this._super(...arguments);
    var tabSet = this.get('_tabSet');
    if (!tabSet) {
      throw new Error('materialize-tabs-tab cannot be used outside the context of a materialize-tabs');
    }
    tabSet.registerTab(this);
  }
});
