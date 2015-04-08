import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    debug: function(){
      console.debug('Action debug sent');
    }
  }
});
