import { deprecate } from '@ember/application/deprecations';
import materializeLoader from './md-loader';

export default materializeLoader.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
