import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  modalIsOpen: false,
  actions: {
    openModal() {
      this.set('modalIsOpen', true);
    },
    closeModal() {
      this.set('modalIsOpen', false);
    },
    agree() {
      window.alert('Thanks for using ember-cli-materialize!');
      this.set('modalIsOpen', false);
    }
  }
});
