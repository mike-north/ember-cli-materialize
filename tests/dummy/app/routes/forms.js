import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  model() {
    return Ember.Object.create({ name: null });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('errors', Ember.Object.create({ name: Ember.A(['This field is required']) }));
  }

});
