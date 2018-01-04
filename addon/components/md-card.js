import Component from '@ember/component';
import layout from '../templates/components/md-card';

export default Component.extend({
  layout,
  classNames: ['card'],
  classNameBindings: ['class']
});
