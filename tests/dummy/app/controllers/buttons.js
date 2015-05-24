import Ember from 'ember';

export default Ember.Controller.extend({

  myData: Ember.A(["hello", "world"]),

  actions: {
    firstAction() {
      window.alert('firstAction');
    },
    anotherAction(arg) {
      window.alert(`anotherAction\narg: ${JSON.stringify(arg)}`);
    }
  }
});
