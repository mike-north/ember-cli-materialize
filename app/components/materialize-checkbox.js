import { deprecate } from '@ember/application/deprecations';
import materializeCheckbox from './md-check';

export default materializeCheckbox.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
