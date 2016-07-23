import Ember from 'ember';
import layout from '../templates/components/md-collection-header';

const { run: { scheduleOnce }, Component } = Ember;

export default Component.extend({
  classNames: ['md-collection-header', 'collection-header'],
  layout,
  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', () => {
      this.collectionComponent.set('_hasHeader', true);
    });
  }
});
