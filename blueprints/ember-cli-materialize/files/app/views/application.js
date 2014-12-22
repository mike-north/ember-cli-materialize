import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function(){
    this._super();
    var Waves = Waves || {};
    Waves.displayEffect();
  }
});
