import Ember from 'ember';
import layout from '../templates/components/md-loader';

export default Ember.Component.extend({
  layout: layout,
  mode: 'indeterminate',
  percent: 0,
  size: 'big',
  active: true,
  color: null,
  classNameBindings: ['isBarType:progress:preloader-wrapper', 'active:active', 'size'],

  isBarType: Ember.computed('mode', function () {
    return ['determinate', 'indeterminate'].indexOf(this.get('mode')) >= 0;
  }),

  isDeterminate: Ember.computed('mode', function () {
    return ['determinate'].indexOf(this.get('mode'));
  }),

  barStyle: Ember.computed('mode', 'percent', function () {
    if (this.get('mode') === 'determinate') {
      return `width: ${this.get('percent')}%`;
    }
    else {
      return null;
    }
  }),

  barClassName: Ember.computed('isBarType', 'mode', function () {
    return this.get('isBarType') ? this.get('mode') : null;
  }),

  spinnerClassNames: Ember.computed('color', 'isBarType', function () {
    if (!this.get('isBarType')) {
      var color = this.get('color');
      if (!color) {
        return Ember.A(['blue', 'red', 'green', 'yellow'].map((c) => (`spinner-layer spinner-${c}`)));
      }
      else {
        return Ember.A([`spinner-layer spinner-${color}-only`]);
      }
    }
    else {
      return Ember.A();
    }
  })
});
