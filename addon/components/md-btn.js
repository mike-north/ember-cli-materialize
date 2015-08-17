import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-btn';

const { Component, computed, computed: { oneWay }, typeOf, run: { scheduleOnce } } = Ember;

export default Component.extend(UsesSettings, {
  layout,
  tagName: 'a',
  classNameBindings: ['btn:waves-effect', 'wavesClass', 'isDisabled:disabled:waves-effect', 'buttonClass'],
  attributeBindings: ['isDisabled:disabled'],
  wavesClass: 'waves-light',
  text: null,
  icon: null,
  iconPosition: oneWay('_mdSettings.buttonIconPosition'),
  buttonType: null,
  actionArg: null,
  isFlat: computed.equal('buttonType', 'flat'),
  isDisabled: false,

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
    if (!this.get('disabled')) {
      this.sendAction('action', this.get('actionArg'));
    }
  }
});

