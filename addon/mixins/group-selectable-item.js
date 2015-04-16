import Ember from 'ember';

export default Ember.Mixin.create({
  name: Ember.computed.alias('content.label'),
  value: Ember.computed.alias('content.value'),
  disabled: Ember.computed.alias('group.disabled')
});
