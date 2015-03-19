import Ember from 'ember';
import layout from '../templates/components/materialize-navbar';

export default Ember.Component.extend({
  didInsertElement: function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
      if(typeof Ember.$('.button-collapse').sideNav === 'function'){
        Ember.$('.button-collapse').sideNav();
      }
    });
  },
  tagName: 'nav',
  layout: layout
});
