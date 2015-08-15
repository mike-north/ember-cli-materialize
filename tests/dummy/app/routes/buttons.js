import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  actions: {
    debug() {
      console.debug('Action debug sent');
    }
  }
});
