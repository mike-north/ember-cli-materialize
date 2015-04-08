import Ember from 'ember';
import layout from '../templates/components/materialize-loader';

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
      var pct = this.get('percent');
      return `width: ${pct}%`;
    }
  }),

  barClassName: Ember.computed('isBarType', 'mode', function () {
    var mode = this.get('mode');
    if (this.get('isBarType')) {
      return mode;
    }
    else {
      return null;
    }
  }),

  spinnerClassNames: Ember.computed('color', 'isBarType', function () {
    if (!this.get('isBarType')) {
      var color = this.get('color');
      if (!color) {
        new Ember.A(['blue', 'red', 'green', 'yellow'].map((c) => (`spinner-layer spinner-${c}`)));
      }
      else {
        return new Ember.A([`spinner-layer spinner-${color}-only`]);
      }
    }
    else {
      return new Ember.A([]);
    }
  })
});
