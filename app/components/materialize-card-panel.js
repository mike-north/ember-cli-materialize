import { deprecate } from '@ember/application/deprecations';
import MaterializeCardPanel from './md-card-panel';

export default MaterializeCardPanel.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
