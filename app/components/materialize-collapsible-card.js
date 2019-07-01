import { deprecate } from '@ember/application/deprecations';
import MaterializeCollapsibleCard from './md-card-collapsible';

export default MaterializeCollapsibleCard.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead', false, {
      id: 'materialize-collapsible-card',
      until: '1.0.0',
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
