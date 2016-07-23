import Ember from 'ember';

const { A, Route } = Ember;

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

