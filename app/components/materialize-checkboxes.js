import Ember from 'ember';
import materializeCheckboxes from './md-checks';

export default materializeCheckboxes.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
