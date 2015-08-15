import Ember from 'ember';
import layout from '../templates/components/md-table';

const { A, Component, computed } = Ember;

export default Component.extend({
  tagName: 'table',
  layout,
  columns: null,

  init() {
    this._super(...arguments);
    this.set('columns', Ember.A());
  },

  registerColumn(key, column) {
    let existingColumn = this.get('columns').findBy('key', key);
    if (existingColumn) {
      return;
    } else {
      this.get('columns').addObject({ key, column });
    }
  },

  columnComponents: computed('columns.@each.key', function() {
    return new A(this.get('columns').mapBy('column'));
  }),

  unregisterColumn(key) {
    this.get('columns').removeObject(this.get('columns').findBy('key', key));
  }
});
