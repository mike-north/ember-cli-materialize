import { deprecate } from '@ember/application/deprecations';
import materializeInputField from './md-input-field';

export default materializeInputField.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead', false, {
      id: 'materialize-input-field',
      until: '1.0.0',
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
