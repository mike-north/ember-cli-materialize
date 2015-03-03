import Ember from 'ember';

export default Ember.Controller.extend({
  inputs: null,
  actions: {
     getFormData: function(params){
      this.set('inputs', params);
    }
  }
});
