import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  queryParams: ['page'],
  page: 2,
  actions: {
    pageChanged() {

    }
  }
});
