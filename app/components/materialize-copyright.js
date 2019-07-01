import { deprecate } from '@ember/application/deprecations';
import materializeCopyright from './md-copyright';

export default materializeCopyright.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead', false, {
      id: 'materialize-copyright',
      until: '1.0.0',
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
