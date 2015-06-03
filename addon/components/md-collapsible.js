import Ember from 'ember';
import layout from '../templates/components/md-collapsible';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',

  classNameBindings: ['class'],
  actions: {
    headerClicked() {
      this.sendAction("action", this.get("model"));
    }
  }
});
