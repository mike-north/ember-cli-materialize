import Mixin from '@ember/object/mixin';
import { alias } from '@ember/object/computed';

export default Mixin.create({
  name: alias('content.label'),
  value: alias('content.value'),
  disabled: false
});
