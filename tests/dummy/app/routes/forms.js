import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return this.get('store').createRecord('person', {
      firstName: 'Mike',
      lastName: '',
      email: 'not-a-valid-address'
    });
  }
});
