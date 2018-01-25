import { deprecate } from '@ember/application/deprecations';
import materializeInput from './md-input';

export default materializeInput.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-input}} has been deprecated. Please use {{md-input}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
