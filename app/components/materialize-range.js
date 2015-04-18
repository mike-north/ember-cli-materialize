import Ember from 'ember';
import materializeRange from './md-range';

export default materializeRange.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-range}} has been deprecated. Please use {{md-range}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
