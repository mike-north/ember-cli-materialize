import { deprecate } from '@ember/application/deprecations';
import MaterializeCollapsible from './md-collapsible';

export default MaterializeCollapsible.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead', false, {
      id: 'materialize-collapsible',
      until: '1.0.0',
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
