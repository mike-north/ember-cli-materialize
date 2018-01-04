import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({

  myData: new A(['hello', 'world']),

  actions: {
    firstAction() {
      window.alert('firstAction');
    },
    anotherAction(arg) {
      window.alert(`anotherAction\narg: ${JSON.stringify(arg)}`);
    }
  }
});
