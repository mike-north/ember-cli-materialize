import Ember from 'ember';
import layout from '../templates/components/materialize-table';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'table',
  columns: null,
  classNames: ['materialize-table'],

  _materializeTable: true,

  init() {
    this._super(...arguments);
    this.set('columns', Ember.A());
  },

  headerColumns: Ember.computed('columns.[]', function () {
    return this.get('columns').toArray();
  }).readOnly(),

  registerColumn(column) {
    this.columns.pushObject(column);
  }
});
