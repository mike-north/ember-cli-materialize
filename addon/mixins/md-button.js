import Ember from 'ember';
import ClickAction from '../mixins/click-action';

const { computed, Mixin } = Ember;

export default Mixin.create(ClickAction, {
  flat: false,
  float: false,
  large: false,
  classNameBindings: ['disabled', '_baseButtonClass', 'large:btn-large', '_isWaves:waves-effect', '_waveType'],
  attributeBindings: ['disabled'],
  waves: 'light',
  _baseButtonClass: computed('flat', 'float', function() {
    const p = this.getProperties(['flat', 'float']);
    if (p.flat) {
      return 'btn-flat';
    } else {
      return p.float ? 'btn-floating' : 'btn';
    }
  }),
  iconClass: computed('float', function() {
    return this.get('float') ? '' : 'left';
  }),
  _isWaves: computed('waves', function() {
    return !!this.get('waves');
  }),
  _waveType: computed('waves', function() {
    return `waves-${this.get('waves')}`;
  })
});
