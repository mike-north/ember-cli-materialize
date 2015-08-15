import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  lastClicked: null,
  actions: {
    clicked(tabModel) {
      this.set('lastClicked', tabModel);
      if(tabModel === this.get('activeSlide')) {
        this.set('activeSlide', null);
      } else {
        this.set('activeSlide', tabModel);
      }
    }
  }
});
