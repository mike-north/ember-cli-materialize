import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  queryParams: ['a'],
  a: 1
});
