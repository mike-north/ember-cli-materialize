import Ember from 'ember';
import ColumnComponent from 'ember-cli-materialize/helpers/materialize-table-col';

export function initialize (container, application) {
  Ember.HTMLBars._registerHelper('materialize-table-col', ColumnComponent);
};

export default {
  name: 'materialize-helpers',
  initialize: initialize
};
