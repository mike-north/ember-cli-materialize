import Ember from 'ember';
import ClickAction from '../mixins/click-action';

const { Mixin } = Ember;

export default Mixin.create(ClickAction, {
  disabled: false,
  classNameBindings: ['disabled']
});
