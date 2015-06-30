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
    this.notifyPropertyChange('_tabSet');
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
      if (this.get('_state') === 'preRender') {
        return null;
      }
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
    /**
      This is a hack for a case where nearestWithProperty doesn't
      work properly in Ember 1.13. Will remove in a future version
      as the glimmer composability story improves
    */

    if (!tabSet) {
      var backupTabSet = this.$().closest('.materialize-tabs')[0];
      if (backupTabSet) {
        tabSet = this.get('_viewRegistry')[backupTabSet.id];
      }
    }
    if (this.get('_state') !== 'preRender') {
      if (tabSet === undefined) {
        throw new Error('materialize-tabs-tab cannot be used outside the context of a materialize-tabs');
      }
      tabSet.registerTab(this);
    }
  }
});
