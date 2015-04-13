import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    // Used for testing to double values in quantity column
    doubleQty() {
      this.get('rows').forEach(i => Ember.set(i, 'qty', i.qty*2));
    }
  },
  rows: Ember.A([
    {id: 1, name: 'Apples', qty: 6},
    {id: 2, name: 'Pears', qty: 2},
    {id: 3, name: 'Grapes', qty: 3},
    {id: 4, name: 'Oranges', qty: 4}
  ]),

  columns: Ember.A([
    {title: 'Id', valuePath: 'id', width: 40},
    {title: 'Name', valuePath: 'name'},
    {title: 'Quantity', valuePath: 'qty'}
  ])
});
