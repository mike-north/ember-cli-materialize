import Ember from 'ember';
import materializeTabsTab from './md-tab';

export default materializeTabsTab.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
