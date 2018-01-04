import { deprecate } from '@ember/application/deprecations';
import MaterializeNavBar from './md-navbar';

export default MaterializeNavBar.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
