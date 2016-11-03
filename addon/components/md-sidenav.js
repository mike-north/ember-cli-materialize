import Ember from 'ember';
import layout from '../templates/components/md-sidenav';

const { run: { scheduleOnce }, Component } = Ember;

export default Component.extend({
  layout,
  classNames: ['side-nav'],
  tagName: 'ul',
  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', () => {
      let pn = this.get('_parentNav');
      if (pn) {
        pn._setupSidenav(this.get('elementId'));
      }
    });
  }
});
