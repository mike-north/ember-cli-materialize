import Ember from 'ember';
import layout from '../templates/components/md-nav-dropdown';

export default Ember.Component.extend({
  tagName: 'li',
  layout,
  didInsertElement() {
    this._super(...arguments);
    Ember.run.schedule('afterRender', () => {
      this.$(".dropdown-button").dropdown();
    });
  }
});
