import { deprecate } from '@ember/application/deprecations';
import materializeSwitches from './md-switches';

export default materializeSwitches.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
