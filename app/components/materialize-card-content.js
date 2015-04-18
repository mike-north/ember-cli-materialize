import Ember from 'ember';
import MaterializeCardContent from './md-card-content';

export default MaterializeCardContent.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
