import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-btn';
import computed from 'ember-new-computed';

const { computed: { oneWay } } = Ember;

export default Ember.Component.extend(UsesSettings, {
  layout: layout,
  tagName: 'a',
  classNameBindings: ['btn:waves-effect', 'isFlat::waves-light', 'isDisabled:disabled:waves-effect', 'buttonClass'],
  attributeBindings: ['isDisabled:disabled'],
  text: null,
  icon: null,
  iconPosition: oneWay('_mdSettings.buttonIconPosition'),
  buttonType: null,
  actionArg: null,
  isFlat: Ember.computed.equal('buttonType', 'flat'),
  isDisabled: false,

  didInsertElement(){
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, this._setupWaves);
  },

  buttonClass: computed('buttonType', {
    get() {
      var buttonType = this.get('buttonType');
      return buttonType ? `btn-${buttonType}` : 'btn';
    }
  }),

  _setupWaves() {
    var Waves = window.Waves || {};
    if(Ember.typeOf(Waves.displayEffect) === 'function'){
      Waves.displayEffect();
    }
  },

  click() {
    this.sendAction('action', this.get('actionArg'));
  }
});

