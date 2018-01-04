import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
  model() {
    // BEGIN-SNIPPET table-route
    let content = new A([
      { id: 'white', name: 'Walter White', route: 'tabs' },
      { id: 'pinkman', name: 'Jesse Pinkman', route: 'modal' },
      { id: 'freng', name: 'Gustavo Freng', route: 'collection' }
    ]);
    // END-SNIPPET

    return content;
  }
});
