import Ember from 'ember';
import materializePagination from './md-pagination';

export default materializePagination.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
