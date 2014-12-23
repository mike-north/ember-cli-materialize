import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
      var Waves = window.Waves || {};
      if(typeof Waves.displayEffect === 'function'){
        Waves.displayEffect();
      }
    });
  },
  tagName: 'a',
  classNameBindings: ['btn:waves-effect', 'isFlat::waves-light', 'isDisabled:disabled:waves-effect', 'buttonClass'],
  text: null,
  icon: null,
  iconPosition: 'left',
  buttonType: null,
  isFlat: Ember.computed.equal('buttonType', 'flat'),
  isDisabled: false,
  buttonClass: function(){
    if(!this.get('buttonType')){
      return 'btn';
    } else {
      return 'btn-' + this.get('buttonType');
    }
  }.property('buttonType'),
  click: function(){
    this.sendAction();
  },
});
