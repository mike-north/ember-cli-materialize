// BEGIN-SNIPPET pagination-controller
import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  queryParams: ['page'],
  page: 3
});
// END-SNIPPET
