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

  isBarType: function () {
    return ['determinate', 'indeterminate'].indexOf(this.get('mode')) >= 0;
  }.property('mode'),

  isDeterminate: function () {
    return ['determinate'].indexOf(this.get('mode'));
  }.property('mode'),

  barStyle: function () {
    if (this.get('mode') === 'determinate') {
      var pct = this.get('percent');
      return `width: ${pct}%`;
    }
  }.property('mode', 'percent'),

  barClassName: function () {
    var mode = this.get('mode');
    if (this.get('isBarType')) {
      return mode;
    }
    else {
      return null;
    }
  }.property('isBarType', 'mode'),

  spinnerClassNames: function () {
    if (!this.get('isBarType')) {
      var color = this.get('color');
      if (!color) {
        return ['blue', 'red', 'green', 'yellow'].map((c) => (`spinner-layer spinner-${c}`));
      }
      else {
        return [`spinner-layer spinner-${color}-only`];
      }
    }
    else {
      return [];
    }
  }.property('color', 'isBarType')
});
