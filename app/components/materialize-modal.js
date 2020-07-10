import { deprecate } from '@ember/application/deprecations';
import MaterializeModal from './md-modal';

export default MaterializeModal.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead', false, {
      id: 'materialize-modal',
      until: '1.0.0',
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
