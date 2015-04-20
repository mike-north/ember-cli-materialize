import Ember from 'ember';
import layout from '../templates/components/md-navbar';

export default Ember.Component.extend({
  tagName: 'nav',
  layout: layout,

  didInsertElement() {
    this._super(...arguments);
    //TODO: is this scheduling necessary?
    Ember.run.scheduleOnce('afterRender', this, this._setupNavbar);
  },

  _setupNavbar() {
    if(Ember.typeOf(Ember.$('.button-collapse').sideNav) === 'function'){
      this.$('.button-collapse').sideNav({
        closeOnClick: true
      });
    }
  }

  //TODO: Unregister any listeners that $.sideNav() puts in place
  // _teardownNavbar() {
  //
  // }
});
