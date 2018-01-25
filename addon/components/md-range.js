import Component from '@ember/component';
import layout from '../templates/components/md-range';

export default Component.extend({
  layout,
  classNames: ['md-range'],
  min: 0,
  max: 100,
  step: 1
});
