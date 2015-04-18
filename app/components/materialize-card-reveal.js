import Ember from 'ember';
import MaterializeCardReveal from './md-card-reveal';

export default MaterializeCardReveal.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
