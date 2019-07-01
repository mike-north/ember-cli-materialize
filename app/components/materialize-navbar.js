import { deprecate } from '@ember/application/deprecations';
import MaterializeNavBar from './md-navbar';

export default MaterializeNavBar.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead', false, {
      id: 'materialize-navbar',
      until: '1.0.0',
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
