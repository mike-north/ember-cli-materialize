import Ember from 'ember';
import layout from '../templates/components/md-card-reveal';

export default Ember.Component.extend({
  classNames: ['md-card-reveal', 'card-reveal'],
  layout,

  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', () => {
      this.card.set('_hasReveal', true);
    });
  }
});
