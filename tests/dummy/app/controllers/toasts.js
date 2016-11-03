import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  flashMessages: Ember.inject.service(),
  actions: {
    // BEGIN-SNIPPET toast-examples
    successToast() {
      this.get('flashMessages')
        .success('Thanks for signing up!');
    },
    errorToast() {
      this.get('flashMessages')
        .danger('Houston, we have a problem!');
    },
    warningToast() {
      this.get('flashMessages')
        .warning('Something fishy is going on');
    },
    defaultToast() {
      this.get('flashMessages')
        .info('Just a little FYI');
    },
    // END-SNIPPET
    // BEGIN-SNIPPET toast-custom
    stickyToast() {
      this.get('flashMessages').add({
        icon: 'flight_land',
        color: 'yellow purple-text rounded',
        sticky: true,
        message: 'This message won\'t disappear until clicked'
      });
    }
    // END-SNIPPET
  }
});
