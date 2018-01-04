import { deprecate } from '@ember/application/deprecations';
import materializeSwitch from './md-switch';

export default materializeSwitch.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
