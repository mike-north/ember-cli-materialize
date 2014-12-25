import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
      if(typeof $('.button-collapse').sideNav === 'function'){
        $('.button-collapse').sideNav();
      }
    });
  },
  tagName: 'nav',
});
