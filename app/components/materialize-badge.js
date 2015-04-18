import Ember from 'ember';
import MaterializeBadge from './md-badge';

export default MaterializeBadge.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
