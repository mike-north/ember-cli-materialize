import Ember from 'ember';
import layout from '../templates/components/md-navbar';
import computed from 'ember-new-computed';

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
      this.notifyPropertyChange('_sideNavId');
      this.$('.button-collapse').sideNav({
        closeOnClick: true
      });
    }
  },

  _sideNavId: computed({
    get() {
      return `${this.get('element.id')}-sidenav`;
    }
  })

  //TODO: Unregister any listeners that $.sideNav() puts in place
  // _teardownNavbar() {
  //
  // }
});
