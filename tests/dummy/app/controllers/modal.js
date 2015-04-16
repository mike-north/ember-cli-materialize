import Ember from 'ember';

export default Ember.Controller.extend({
  modalIsOpen: false,
  actions: {
    openModal() {
      this.set('modalIsOpen', true);
    },
    closeModal() {
      this.set('modalIsOpen', false);
    },
    agree() {
      window.alert('agree');
      this.set('modalIsOpen', false);
    }
  }
});
