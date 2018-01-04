import Component from '@ember/component';
import layout from '../templates/components/md-card-panel';

export default Component.extend({
  layout,

  classNames: ['card-panel'],
  classNameBindings: ['class']
});
