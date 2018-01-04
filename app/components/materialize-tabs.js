import { deprecate } from '@ember/application/deprecations';
import materializeTabs from './md-tabs';

export default materializeTabs.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
