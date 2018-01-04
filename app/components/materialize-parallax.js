import { deprecate } from '@ember/application/deprecations';
import materializeParallax from './md-parallax';

export default materializeParallax.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
