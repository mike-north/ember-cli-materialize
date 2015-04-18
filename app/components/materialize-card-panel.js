import Ember from 'ember';
import MaterializeCardPanel from './md-card-panel';

export default MaterializeCardPanel.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
