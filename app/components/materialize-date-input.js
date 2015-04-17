import Ember from 'ember';
import materializeDateInput from './md-input-date';

export default materializeDateInput.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
