import Ember from 'ember';
import layout from '../templates/components/md-switch';

export default Ember.Component.extend({
  classNames: ['md-switch', 'switch'],
  tagName: 'p',
  layout,
  value: true,
  onLabel: 'On',
  offLabel: 'Off',
  actions: {
    onChange() {
      this.set('value', this.$('input')[0].checked);
      this.sendAction('on-change');
    }
  }
});
