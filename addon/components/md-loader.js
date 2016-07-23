import Ember from 'ember';
import layout from '../templates/components/md-loader';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['md-loader'],
  classNameBindings: ['_barClass', 'active:active', 'small::big'],
  spinnerClass: null,
  _spinnerClassString: computed('spinnerClassNames', function() {
    return this.get('spinnerClass').join(' ');
  }),
  concatenatedPropertiesArray: ['spinnerClassNames'],
  max: 100,
  value: null,
  circular: false,
  active: true,
  small: false,
  _barClass: computed('circular', function() {
    return this.get('circular') ? 'preloader-wrapper' : 'progress';
  }),
  _barLoaderClass: computed('value', 'circular', function() {
    const x = this.getProperties(['circular', 'value']);
    if (x.circular) {
      return '';
    } else {
      return this.get('value') ? 'determinate' : 'indeterminate';
    }
  }),
  _barStyle: computed('max', 'value', function() {
    return new Ember.String.htmlSafe(`width: ${100 * this.get('value') / this.get('max')}%`);
  }),
  layout,
  init() {
    this._super(...arguments);
    this.set('spinnerClass', Ember.A(
      ['spinner-layer']
        .concat((this.attrs.spinnerClass || '').split(' '))
    ));
  }
});
