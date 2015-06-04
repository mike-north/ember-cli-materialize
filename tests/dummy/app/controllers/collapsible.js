import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    clicked(tabModel) {
      if(tabModel === this.get("activeSlide")) {
        this.set("activeSlide", null);
      } else {
        this.set("activeSlide", tabModel);
      }
    }
  }
});
