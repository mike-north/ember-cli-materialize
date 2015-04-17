import Ember from 'ember';
import materializeParallax from './md-parallax';

export default materializeParallax.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
