// BEGIN-SNIPPET pagination-controller
import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['page'],
  page: 3
});
// END-SNIPPET
