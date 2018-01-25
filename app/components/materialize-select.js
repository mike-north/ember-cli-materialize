import { deprecate } from '@ember/application/deprecations';
import materializeSelect from './md-select';

export default materializeSelect.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-select}} has been deprecated. Please use {{md-select}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
