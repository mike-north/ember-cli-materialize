import Ember from 'ember';
export default Ember.View.extend({

  didInsertElement() {
    this._super(...arguments);
    this.$('.demo-button-collapse').sideNav();
  }
});
