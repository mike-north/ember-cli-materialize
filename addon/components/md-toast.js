import Ember from 'ember';
import layout from '../templates/components/md-toast';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

const {
  Component,
  inject,
  run: {
    next,
    cancel,
    later
  },
  computed,
  computed: {
    readOnly
  },
  String: {
    htmlSafe
  },
  getWithDefault
} = Ember;
const assign = Ember.assign || Ember.mixin;

export default Component.extend(RecognizerMixin, {
  recognizers: 'pan',
  'md-config': inject.service(),
  classNames: ['md-toast', 'toast'],
  classNameBindings: ['active', '_toastClass', 'exiting', 'panning', '_clicked:exiting'],
  active: false,
  showProgressBar: computed('content.showProgress', 'content.sticky', function() {
    return this.get('content.showProgress') && !this.get('content.sticky');
  }),
  exiting: readOnly('content.exiting'),
  attributeBindings: ['style'],
  _clicked: false,
  panning: false,
  layout,
  _inlineStyle: null,
  init() {
    this._super(...arguments);
    this.set('_inlineStyle', {});
  },
  _toastStyle: computed('content.type', function() {
    return assign(
      assign({}, this.get('md-config.options.toasts.styles.default') || {}),
      assign({}, this.get(`md-config.options.toasts.styles.${this.get('content.type')}`) || {})
    );
  }),
  style: computed('_inlineStyle', '_inlineStyle.left', '_inlineStyle.opacity', function() {
    let props = [];
    if (this.get('_inlineStyle.left')) {
      props.push(`left: ${this.get('_inlineStyle.left')}px`);
    }
    if (this.get('_inlineStyle.opacity')) {
      props.push(`opacity: ${this.get('_inlineStyle.opacity')}`);
    }
    return htmlSafe(props.join('; '));
  }),
  _alertIcon: computed('content.icon', 'content.type', function() {
    const icon = this.get('content.icon');
    if (icon) {
      return icon;
    }
    return this.get(`_toastStyle.icon`);
  }),
  _toastClass: computed('content.color', 'content.type', function() {
    const color = this.get('content.color');
    if (color) {
      return color;
    }
    return this.get(`_toastStyle.class`);
  }),

  didInsertElement() {
    this._super(...arguments);
    const applyActiveClass = next(() => {
      this.set('active', true);
    });
    this.set('_applyActiveClass', applyActiveClass);
  },

  click() {
    this.set('_clicked', true);
    later(() => {
      this._destroyFlashMessage();
    }, this.get('content.extendedTimeout'));
  },
  progressDuration: computed('active', 'content.timeout', function() {
    return htmlSafe(`transition: width ${this.get('content.timeout')}ms; width: ${this.get('active') ? 100 : 0}%`);
  }),
  pan(e) {
    const dx = Ember.get(e, 'gesture.deltaX') || Ember.get(e, 'originalEvent.gesture.deltaX');
    const activationDistance = this.get('md-config.toasts.activationDistance');
    this.set('panning', true);
    var opacityPercent = 1 - Math.abs(dx / activationDistance);
    if (opacityPercent < 0) {
      opacityPercent = 0;
    }
    this.get('content').set('sticky', true);
    this.set('_inlineStyle.left', dx);
    this.set('_inlineStyle.opacity', opacityPercent);
  },

  panEnd(e) {
    const dx = Ember.get(e, 'gesture.deltaX') || Ember.get(e, 'originalEvent.gesture.deltaX');
    const activationDistance = this.get('md-config.toasts.activationDistance');
    if (Math.abs(dx) > activationDistance) {
      this.click();
    } else {
      this.set('panning', false);
      this.set('_inlineStyle', {});
    }
  },

  willDestroy() {
    this._super();
    this._destroyFlashMessage();
    const _applyActiveClass = this.get('_applyActiveClass');
    if (_applyActiveClass) {
      cancel(_applyActiveClass);
    }
  },

  _destroyFlashMessage() {
    const flash = getWithDefault(this, 'content', false);
    if (flash) {
      flash.destroyMessage();
    }
  }
});
