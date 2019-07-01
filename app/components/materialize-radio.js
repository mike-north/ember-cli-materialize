import { deprecate } from '@ember/application/deprecations';
import materializeRadio from './md-radio';

export default materializeRadio.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead', false, {
      id: 'materialize-radio',
      until: '1.0.0',
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
