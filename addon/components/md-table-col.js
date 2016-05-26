import Ember from 'ember';
import layout from '../templates/components/md-table-col';
import Table from './md-table';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import DefaultColumnHeaderView from 'ember-cli-materialize/views/default-column-header';

const { Component, computed, get, computed: { oneWay } } = Ember;

export default Component.extend(ChildComponentSupport, {
  _parentComponentTypes: [Table],
  tagName: 'td',
  layout,
  valueBindingPath: null,
  headerView: DefaultColumnHeaderView,
  header: oneWay('valueBindingPath'),
  key: oneWay('valueBindingPath'),
  _value: computed('valueBindingPath', 'row', function() {
    let vbp = this.get('valueBindingPath');
    if (!vbp) {
      return '';
    } else {
      return get(this.get('row'), this.get('valueBindingPath'));
    }
  })
});
