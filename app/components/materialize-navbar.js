import Ember from 'ember';
import MaterializeNavBar from './md-navbar';

export default MaterializeNavBar.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
