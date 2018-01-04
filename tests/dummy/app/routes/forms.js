import EObj from '@ember/object';
import Route from '@ember/routing/route';
import { A } from '@ember/array';
// jscs:enable disallowDirectPropertyAccess

export default Route.extend({
  model() {
    return EObj.create({ name: null });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('errors', EObj.create({ name: A(['This field is required']) }));
  }
});
