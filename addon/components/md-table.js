import Ember from 'ember';
import layout from '../templates/components/md-table';
import computed from 'ember-new-computed';

export default Ember.Component.extend({
  tagName: 'table',
  layout: layout,
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
      this.get('columns').addObject({key, column});
    }
  },

  columnComponents: computed('columns.@each.key', {
    get() {
      return Ember.A(this.get('columns').mapBy('column'));
    }
  }),

  unregisterColumn(key) {
    this.get('columns').removeObject(this.get('columns').findBy('key', key));
  }
});
