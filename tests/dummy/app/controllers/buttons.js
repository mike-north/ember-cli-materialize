import Ember from 'ember';

const { Controller, A } = Ember;

export default Controller.extend({

  myData: new A(["hello", "world"]),

  actions: {
    firstAction() {
      window.alert('firstAction');
    },
    anotherAction(arg) {
      window.alert(`anotherAction\narg: ${JSON.stringify(arg)}`);
    }
  }
});
