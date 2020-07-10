import { deprecate } from '@ember/application/deprecations';
import MaterializeCardContent from './md-card-content';

export default MaterializeCardContent.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead', false, {
      id: 'materialize-card-content',
      until: '1.0.0',
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
