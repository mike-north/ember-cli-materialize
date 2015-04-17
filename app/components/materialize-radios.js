import Ember from 'ember';
import materializeRadios from './md-radios';

export default materializeRadios.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
