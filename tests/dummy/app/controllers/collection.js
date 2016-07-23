import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  queryParams: ['selected'],
  selected: 'stef',
  emberObjects: [
    {id: 1, name: 'Route'},
    {id: 2, name: 'Component'},
    {id: 3, name: 'Service'}
  ],
  cliObjects: [
    {id: 1, name: 'Command'},
    {id: 2, name: 'Task'}
  ]
});
