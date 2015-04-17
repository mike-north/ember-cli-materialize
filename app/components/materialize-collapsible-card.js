import Ember from 'ember';
import MaterializeCollapsibleCard from './md-card-collapsible';

export default MaterializeCollapsibleCard.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
