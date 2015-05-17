import Ember from 'ember';
import layout from '../templates/components/md-loader';
import computed from 'ember-new-computed';

export default Ember.Component.extend({
  layout: layout,

  classNameBindings: ['isBarType:progress:preloader-wrapper', 'active:active', 'size'],

  mode: 'indeterminate',
  percent: 0,
  size: 'big',
  active: true,
  color: null,

  isBarType: computed('mode', {
    get() {
      return ['determinate', 'indeterminate'].indexOf(this.get('mode')) >= 0;
    }
  }),

  isDeterminate: computed('mode', {
    get() {
      return ['determinate'].indexOf(this.get('mode'));
    }
  }),

  barStyle: computed('mode', 'percent', {
    get() {
      if (this.get('mode') === 'determinate') {
        return Ember.String.htmlSafe(`width: ${parseInt(this.get('percent'), 10)}%`).string;
      }
      else {
        return null;
      }
    }
  }),

  barClassName: computed('isBarType', 'mode', {
    get() {
      return this.get('isBarType') ? this.get('mode') : null;
    }
  }),

  spinnerClassNames: computed('color', 'isBarType', {
    get() {
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
    }
  })
});
