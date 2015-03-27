import Ember from 'ember';

export default Ember.ObjectController.extend({
  frameworks: [
      {id: 1, value: 'Materialize CSS'},
      {id: 2, value: 'Ember-CLI Materialize'}
  ],
  errors: Ember.Object.create({
    name: [],
    framework: []
  }),
  nameDidChange: function() {
    var errors = this.get('errors');
    var messages = [];
    if (!Ember.isPresent(this.get('name'))) {
      messages = ['This field is required'];
    }
    errors.set('name', messages);
    this.set('errors', errors);
  }.observes('name'),
  frameworkDidChange: function() {
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
  }.observes('framework')
});
