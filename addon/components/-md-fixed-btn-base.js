import Ember from 'ember';

export default Ember.Component.extend({
  actionArgs: null,
  large: true,

  actions: {
    fireButtonAction() {
      var actionArgs = this.get('actionArgs');
      if (actionArgs) {
        this.sendAction('action', actionArgs || null);
      }
      else {
        this.sendAction('action');
      }
    }
  },

  _btnClassString: Ember.computed('btnClass', function () {
    return `${this.get('btnClass')} btn-floating ${this.get('large') ? 'btn-large' : ''}`;
  })
});
