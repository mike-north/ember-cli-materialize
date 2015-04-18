import Ember from 'ember';
import materializeCopyright from './md-copyright';

export default materializeCopyright.extend({
  init() {
    this._super(...arguments);
    Ember.deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, {url: "https://github.com/sgasser/ember-cli-materialize/issues/67"});
  }
});
