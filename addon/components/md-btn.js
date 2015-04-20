import Ember from 'ember';
import layout from '../templates/components/md-btn';
import computed from 'ember-new-computed';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'a',
  classNameBindings: ['btn:waves-effect', 'isFlat::waves-light', 'isDisabled:disabled:waves-effect', 'buttonClass'],
  attributeBindings: ['isDisabled:disabled'],
  text: null,
  icon: null,
  iconPosition: 'left',
  buttonType: null,
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
    this.sendAction();
  }
});

