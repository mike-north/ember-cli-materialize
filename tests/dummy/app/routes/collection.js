import { A } from '@ember/array';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // BEGIN-SNIPPET collection-route
    let content = A([
      { id: 'white',   name: 'Walter White',   route: 'tabs' },
      { id: 'pinkman', name: 'Jesse Pinkman',  route: 'modal' },
      { id: 'freng',   name: 'Gustavo Freng',  route: 'collection' }
    ]);
    // END-SNIPPET
    return content;
  }
});

