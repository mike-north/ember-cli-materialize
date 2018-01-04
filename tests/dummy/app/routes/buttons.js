import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    debug() {
      // eslint-disable-next-line
      console.debug('Action debug sent');
    }
  }
});
