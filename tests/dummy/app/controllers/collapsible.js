import Ember from 'ember';

export default Ember.Controller.extend({
  lastClicked: null,
  actions: {
    clicked(tabModel) {
      this.set('lastClicked', tabModel);
      if(tabModel === this.get("activeSlide")) {
        this.set("activeSlide", null);
      } else {
        this.set("activeSlide", tabModel);
      }
    }
  }
});
