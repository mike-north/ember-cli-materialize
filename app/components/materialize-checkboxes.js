import { deprecate } from '@ember/application/deprecations';
import materializeCheckboxes from './md-checks';

export default materializeCheckboxes.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead', false, {
      id: 'materialize-checkboxes',
      until: '1.0.0',
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
