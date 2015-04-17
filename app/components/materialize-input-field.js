import Ember from 'ember';
import materializeInputField from './md-input-field';

export default materializeInputField.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
