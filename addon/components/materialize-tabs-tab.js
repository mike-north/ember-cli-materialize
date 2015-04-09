import Ember from 'ember';
import layout from '../templates/components/materialize-tabs-tab';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  classNames: ['materialize-tabs-tab', 'tab'],

  _tabSet: Ember.computed(function () {
    return this.nearestWithProperty('___materializeTabs');
  }),

  _active: Ember.computed('_tabSet.selected', 'value', function () {
    return this.get('_tabSet.selected') === this.get('value');
  }),

  click: function () {
    this.trigger('tabClicked', this);
  },

  didInsertElement: function () {
    this._super(...arguments);
    var tabSet = this.get('_tabSet');
    if (!tabSet) {
      throw new Error('materialize-tabs-tab cannot be used outside the context of a materialize-tabs');
    }
    tabSet.registerTab(this);
  }
});
