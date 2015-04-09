import Ember from 'ember';

export default Ember.Controller.extend({
  basicTabsContent: new Ember.A([
    {id: 'a', title: 'First'},
    {id: 'b', title: 'Second'},
    {id: 'c', title: 'Third'}
  ]),
  alternateTabsContent: new Ember.A([
    {key: 'a', label: 'First'},
    {key: 'b', label: 'Second'},
    {key: 'c', label: 'Third'}
  ]),
  basicTabsSelection: 'a',
  secondTabsSelection: 'g',
  actions: {
    addTab: function () {
      this.get('basicTabsContent').addObject({id: 'd', title: 'Fourth'});
    }
  }
});
