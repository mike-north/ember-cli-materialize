import Ember from 'ember';

var alias = Ember.computed.alias;

export default Ember.Mixin.create({
  name: alias('content.label'),
  value: alias('content.value'),
  disabled: false
});
