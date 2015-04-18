import Ember from 'ember';
import materializeSwitches from './md-switches';

export default materializeSwitches.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
