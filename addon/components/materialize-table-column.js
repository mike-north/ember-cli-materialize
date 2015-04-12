import Ember from 'ember';
import TableCell from '../views/materialize-table-cell';
import layout from '../templates/components/materialize-table-column';

var get = Ember.get;
var extend = Ember.$.extend;

export default Ember.Component.extend({
  layout: layout,
  tagName: '',

  cellViewClass: TableCell,

  init() {
    this._super(...arguments);

    var props = get(this, 'props');

    if (get(props, 'properties')) {
      props = extend(props, get(props, 'properties').value());
    }

    Ember.assert('You must set the title propery on all columns.', get(props, 'title'));

    var table     = this.nearestWithProperty('_materializeTable');
    props.table = table;

    if (!props.cellView) {
      props.cellView = get(this, 'cellViewClass').extend({
        template: get(props, 'template'),
        table:    table
      });
    }
    else {
      props.cellView = props.cellView.value().extend({
        table: table
      });
    }

    var column = Ember.Object.extend(Ember.ActionHandler, {}).create(props);
    table.registerColumn(column);
  }
});
