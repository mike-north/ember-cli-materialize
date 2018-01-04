import { deprecate } from '@ember/application/deprecations';
import MaterializeCardAction from './md-card-action';

export default MaterializeCardAction.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
