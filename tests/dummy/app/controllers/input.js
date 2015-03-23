import Ember from 'ember';

export default Ember.ObjectController.extend({

  nameDidChange: function() {
    var errors = { name: [] };
    if (!Ember.isPresent(this.get('name'))) {
      errors.name = ['This field is required'];
    } else {
      errors.name = [];
    }
    this.set('errors', errors);
  }.observes('name')

});
