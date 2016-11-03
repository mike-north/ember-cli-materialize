import Ember from 'ember';
import layout from '../templates/components/md-nav';

const { run: { next }, Component } = Ember;

export default Component.extend({
  classNames: ['md-nav'],
  layout,
  tagName: 'nav',
  _setupSidenav(id) {
    this.set('_sidenavId', id);
    next(() => {
      this.$('.button-collapse').sideNav({
        width: 300,
        closeOnClick: true
      });
    });
  }
});
