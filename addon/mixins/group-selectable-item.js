import Ember from 'ember';

const { Mixin, computed: { alias } } = Ember;

export default Mixin.create({
  name: alias('content.label'),
  value: alias('content.value'),
  disabled: false
});
