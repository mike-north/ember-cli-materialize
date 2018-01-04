import Controller from '@ember/controller';

export default Controller.extend({
  modalIsOpen: false,
  isOpen: false,
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
