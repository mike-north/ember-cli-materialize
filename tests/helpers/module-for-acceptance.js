import { module } from 'qunit';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import 'dummy/tests/helpers/percy/register-helpers';

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp();

      if (options.beforeEach) {
        options.beforeEach(...arguments);
      }
    },

    afterEach() {
      if (options.afterEach) {
        options.afterEach(...arguments);
      }

      destroyApp(this.application);
    }
  });
}
