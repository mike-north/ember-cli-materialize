import Ember from 'ember';
const DEFAULT_TOAST_DURATION = 3000;

const {
  run: {
    bind
  },
  RSVP: {
    Promise
  }
} = Ember;

export default Ember.Service.extend({
  toast(options = {}){
    return new Promise((res) => {
      var duration = options.duration || DEFAULT_TOAST_DURATION;
      var {isError, message, className} = options;
      if (isError) {
        className = 'red';
      }
      window.Materialize.toast(message, duration, className, bind(null, res));
    });
  }
});
