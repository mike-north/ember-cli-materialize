import Ember from 'ember';
import materializeCheckbox from './md-check';

export default materializeCheckbox.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
