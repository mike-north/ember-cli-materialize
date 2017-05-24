import Ember from 'ember';

const { Route, Logger } = Ember;

export default Route.extend({
  actions: {
    debug() {
      Logger.debug('Action debug sent');
    }
  }
});
