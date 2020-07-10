import { deprecate } from '@ember/application/deprecations';
import materializeRange from './md-range';

export default materializeRange.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-range}} has been deprecated. Please use {{md-range}} instead', false, {
      id: 'materialize-range',
      until: '1.0.0',
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
