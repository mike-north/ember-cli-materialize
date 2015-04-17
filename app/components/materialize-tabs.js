import Ember from 'ember';
import materializeTabs from './md-tabs';

export default materializeTabs.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
