export default {
  materialize: {
    toasts: {
      activationDistance: 80, //px
      styles: {
        success: {
          class: 'green',
          icon: 'check'
        },
        danger: {
          class: 'red',
          icon: 'error'
        },
        warning: {
          class: 'yellow black-text',
          icon: 'warning'
        },
        default: {
          class: '',
          icon: null
        }
      }
    }
  },
  flashMessageDefaults: {
    timeout: 3000,
    extendedTimeout: 375,
    showProgress: true
  }
};
