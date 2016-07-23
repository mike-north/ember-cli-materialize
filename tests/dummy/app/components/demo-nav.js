import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['navbar-fixed'],
  didInsertElement() {
    this._super(...arguments);
    this.$('.demo-button-collapse').sideNav();
  }
});
