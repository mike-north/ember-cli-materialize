import Ember from 'ember';

const { Route, A, Object: EObj } = Ember;

export default Route.extend({

  model() {
    return EObj.create({ name: null });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('errors', EObj.create({ name: A(['This field is required']) }));
  }

});
