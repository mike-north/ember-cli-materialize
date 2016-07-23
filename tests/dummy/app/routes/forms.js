import Ember from 'ember';

const { Route, A } = Ember;
// jscs:disable disallowDirectPropertyAccess
const EObj = Ember.Object;
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
