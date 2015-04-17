import Ember from 'ember';
import MaterializeCard from './md-card';

export default MaterializeCard.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
