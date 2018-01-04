import { deprecate } from '@ember/application/deprecations';
import MaterializeButtonSubmit from './md-btn-submit';

export default MaterializeButtonSubmit.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
