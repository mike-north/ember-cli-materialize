import { deprecate } from '@ember/application/deprecations';
import materializeTextarea from './md-textarea';

export default materializeTextarea.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
