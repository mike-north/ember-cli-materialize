import { deprecate } from '@ember/application/deprecations';
import MaterializeCard from './md-card';

export default MaterializeCard.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-card}} has been deprecated. Please use {{md-card}} instead', false, {
      id: 'materialize-card',
      until: '1.0.0',
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
