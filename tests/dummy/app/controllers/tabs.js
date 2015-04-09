import Ember from 'ember';

export default Ember.Controller.extend({
  basicTabsContent: new Ember.A([
    {id: 'a', title: 'First'},
    {id: 'b', title: 'Second'},
    {id: 'c', title: 'Third'}
  ]),
  basicTabsSelection: 'a',

  actions: {
    addTab: function () {
      this.get('basicTabsContent').addObject({id: 'd', title: 'Fourth'});
    }
  }
});
