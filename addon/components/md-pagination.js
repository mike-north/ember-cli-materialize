import Ember from 'ember';
import layout from '../templates/components/md-pagination';

export default Ember.Component.extend({
  min: 1,
  max: 1,
  current: 1,
  range: 5,
  layout: layout,
  tagName: 'ul',
  classNames: ['pagination'],

  windowRange: Ember.computed('min', 'max', 'range', 'current', function () {
    var max = this.get('max');
    var min = this.get('min');
    var range = this.get('range');
    var current = this.get('current');

    var middle = Math.floor((max - min)/2);
    var low = Math.max(min, current - Math.floor(range/2));
    var high = Math.min(max, current + Math.floor(range/2));

    if (high-low < range-1) {
      if (current <= middle) {
        high = Math.min(max, low + range-1);
      }
      else {
        low = Math.max(min, high - (range-1));
      }
    }
    return {
      low, high
    };
  }),

  _pages: Ember.computed('windowRange.low', 'windowRange.high', 'current', function () {
    var a = Ember.A();
    var winRange = this.get('windowRange');
    var current = this.get('current');
    for (var i = winRange.low; i <= winRange.high; i +=1) {
      a.addObject({val: i, cssClass: (current === i ? 'active' : 'waves-effect')});
    }
    return a;
  }).readOnly(),

  _canGoBack: Ember.computed('min', 'current', function () {
    return this.get('current') > this.get('min');
  }),

  _canGoFwd: Ember.computed('max', 'current', function () {
    return this.get('current') < this.get('max');
  }),

  incrementClass: Ember.computed('_canGoFwd', function() {
    return this.get('_canGoFwd') ? '' : 'disabled';
  }),

  decrementClass: Ember.computed('_canGoBack', function() {
    return this.get('_canGoBack') ? '' : 'disabled';
  }),

  actions: {
    oneBack() {
      if (this.get('_canGoBack')) {
        this.decrementProperty('current');
      }
    },
    oneFwd() {
      if (this.get('_canGoFwd')) {
        this.incrementProperty('current');
      }
    },
    gotoPage(pagenum) {
      this.set('current', pagenum);
    }
  }
});
