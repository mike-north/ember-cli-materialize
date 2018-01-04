import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  actionArgs: null,
  large: true,

  actions: {
    fireButtonAction() {
      const actionArgs = this.get('actionArgs');
      if (actionArgs) {
        this.sendAction('action', actionArgs || null);
      } else {
        this.sendAction('action');
      }
    }
  },

  _btnClassString: computed('btnClass', function() {
    return `${this.get('btnClass')} btn-floating ${this.get('large') ? 'btn-large' : ''}`;
  })
});
