import Ember from 'ember';

const { Mixin } = Ember;

export default Mixin.create({
  click() {
    this.sendAction('on-click');
    this.sendAction();
  }
});
