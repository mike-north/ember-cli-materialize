import { deprecate } from '@ember/application/deprecations';
import MaterializeButton from './md-btn';

export default MaterializeButton.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-button}} has been deprecated. Please use {{md-btn}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
