import Component from '@ember/component';
import { computed } from '@ember/object';
import { A } from '@ember/array';
import layout from '../templates/components/md-pagination';

export default Component.extend({
  layout,

  classNames: ['pagination'],

  min: 1,
  max: 1,
  current: 1,
  range: 5,
  tagName: 'ul',

  windowRange: computed('min', 'max', 'range', 'current', function() {
    // TODO: this should be broken out into a util, so that it can be tested independently
    const max = this.get('max');
    const min = this.get('min');
    const range = this.get('range');
    const current = this.get('current');

    const middle = Math.floor((max - min) / 2);
    let low = Math.max(min, current - Math.floor(range / 2));
    let high = Math.min(max, current + Math.floor(range / 2));

    if (high - low < range - 1) {
      if (current <= middle) {
        high = Math.min(max, low + range - 1);
      } else {
        low = Math.max(min, high - (range - 1));
      }
    }
    return {
      low,
      high
    };
  }),

  _pages: computed('windowRange.low', 'windowRange.high', 'current', function() {
    const a = new A([]);
    const winRange = this.get('windowRange');
    const current = this.get('current');
    for (let i = winRange.low; i <= winRange.high; i += 1) {
      a.addObject({ val: i, cssClass: current === i ? 'active' : 'waves-effect' });
    }
    return a;
  }),

  _canGoBack: computed('min', 'current', function() {
    return this.get('current') > this.get('min');
  }),

  _canGoFwd: computed('max', 'current', function() {
    return this.get('current') < this.get('max');
  }),

  incrementClass: computed('_canGoFwd', function() {
    return this.get('_canGoFwd') ? '' : 'disabled';
  }),

  decrementClass: computed('_canGoBack', function() {
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
