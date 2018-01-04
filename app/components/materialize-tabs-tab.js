import { deprecate } from '@ember/application/deprecations';
import materializeTabsTab from './md-tab';

export default materializeTabsTab.extend({
  init() {
    this._super(...arguments);
    deprecate('{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead', false, {
      url: 'https://github.com/sgasser/ember-cli-materialize/issues/67'
    });
  }
});
