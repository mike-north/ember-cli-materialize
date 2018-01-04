import { deprecate } from '@ember/application/deprecations';
import MaterializeCardReveal from './md-card-reveal';

export default MaterializeCardReveal.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
