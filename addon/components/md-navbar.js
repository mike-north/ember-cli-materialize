import Ember from 'ember';
import layout from '../templates/components/md-navbar';

const { $, computed, Component, typeOf, run: { scheduleOnce } } = Ember;

export default Component.extend({
  tagName: 'nav',
  layout,
  homeRoute: 'index',

  didInsertElement() {
    this._super(...arguments);
    // TODO: is this scheduling necessary?
    scheduleOnce('afterRender', this, this._setupNavbar);
  },

  _setupNavbar() {
    if (typeOf($('.button-collapse').sideNav) === 'function') {
      this.notifyPropertyChange('_sideNavId');
      this.$('.button-collapse').sideNav({
        closeOnClick: true
      });
    }
  },

  _sideNavId: computed(function() {
    return `${this.get('element.id')}-sidenav`;
  })

  // TODO: Unregister any listeners that $.sideNav() puts in place
  // _teardownNavbar() {
  //
  // }
});
