import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function(){
    this._super();
    $('.button-collapse').sideNav();
    Waves.displayEffect();
  }
});
