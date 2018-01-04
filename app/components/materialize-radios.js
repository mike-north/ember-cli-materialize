import { deprecate } from '@ember/application/deprecations';
import materializeRadios from './md-radios';

export default materializeRadios.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
