import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  // isModalOpen: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isModalOpen');
    }
  }
});
