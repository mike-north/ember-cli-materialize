import Component from '@ember/component';

export default Component.extend({
  classNames: ['navbar-fixed'],
  didInsertElement() {
    this._super(...arguments);
    this.$('.demo-button-collapse').sideNav();
  }
});
