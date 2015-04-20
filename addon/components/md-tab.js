import Ember from 'ember';
import layout from '../templates/components/md-tab';
import computed from 'ember-new-computed';

export default Ember.Component.extend({
  tagName: 'li',
  layout: layout,

  classNames: ['materialize-tabs-tab', 'tab', 'col'],
  classNameBindings: ['_colClass'],

  colWidth: Ember.computed.alias('_tabSet.colWidth'),

  didInsertElement() {
    this._super(...arguments);
    this._registerTab();
  },

  click() {
    this.trigger('tabClicked', this);
  },

  _colClass: computed('colWidth', {
    get() {
      return `s${this.get('colWidth')}`;
    }
  }),

  _tabSet: computed({
    get() {
      return this.nearestWithProperty('___materializeTabs');
    }
  }),

  _active: computed('_tabSet.selected', 'value', {
    get() {
      return this.get('_tabSet.selected') === this.get('value');
    }
  }),

  _registerTab() {
    var tabSet = this.get('_tabSet');
    if (!tabSet) {
      throw new Error('materialize-tabs-tab cannot be used outside the context of a materialize-tabs');
    }
    tabSet.registerTab(this);
  }
});
