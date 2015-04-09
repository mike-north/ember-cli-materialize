import Ember from 'ember';

export default Ember.Controller.extend({
  frameworks: new Ember.A([
      {id: 1, value: 'Materialize CSS'},
      {id: 2, value: 'Ember-CLI Materialize'}
  ]),

  errors: Ember.Object.create({
    name: new Ember.A([]),
    framework: new Ember.A([])
  }),

  nameDidChange: Ember.observer('name', function() {
    var errors = this.get('errors');
    var messages = [];
    if (!Ember.isPresent(this.get('name'))) {
      messages = ['This field is required'];
    }
    errors.set('name', messages);
    this.set('errors', errors);
  }),

  frameworkDidChange: Ember.observer('framework', function() {
    var self = this;
    var errors = self.get('errors');
    Ember.run.later(function() {
      var messages = [];
      if (!Ember.isPresent(self.get('framework'))) {
        messages = ['This field is required'];
      }
      errors.set('framework', messages);
      self.set('errors', errors);
    }, 100);
  })
});
