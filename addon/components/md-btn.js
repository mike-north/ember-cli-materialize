import { equal } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { typeOf } from '@ember/utils';
import { scheduleOnce } from '@ember/runloop';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-btn';

export default Component.extend(UsesSettings, {
  layout,
  tagName: 'a',
  classNameBindings: ['btn:waves-effect', 'wavesClass', 'isDisabled:disabled:waves-effect', 'buttonClass'],
  attributeBindings: ['isDisabled:disabled'],
  wavesClass: 'waves-light',
  text: null,
  icon: null,
  iconPosition: null,
  buttonType: null,
  actionArg: null,
  isFlat: equal('buttonType', 'flat'),
  isDisabled: false,

  init() {
    this._super(...arguments);
    if (!this.get('iconPosition')) {
      this.set('iconPosition', this.get('_mdSettings.buttonIconPosition'));
    }
  },

  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', this, this._setupWaves);
  },

  buttonClass: computed('buttonType', function() {
    const buttonType = this.get('buttonType');
    return buttonType ? `btn-${buttonType}` : 'btn';
  }),

  _setupWaves() {
    const Waves = window.Waves || {};
    if (typeOf(Waves.displayEffect) === 'function') {
      Waves.displayEffect();
    }
  },

  click() {
    if (!this.get('isDisabled')) {
      this.sendAction('action', this.get('actionArg'));
    }
  }
});
