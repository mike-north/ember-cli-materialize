import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.Object.create({ name: null });
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('errors', { name: ['This field is required'] });
  }

});
