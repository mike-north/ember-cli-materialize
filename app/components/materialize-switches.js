import { deprecate } from '@ember/application/deprecations';
import materializeSwitches from './md-switches';

export default materializeSwitches.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead', false, {
      id: 'materialize-switches',
      until: '1.0.0',
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
