import { deprecate } from '@ember/application/deprecations';
import materializePagination from './md-pagination';

export default materializePagination.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
