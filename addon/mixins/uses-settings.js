import { getOwner } from '@ember/application';
import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  _mdSettings: computed(function() {
    // jscs:disable disallowDirectPropertyAccess
    let owner = getOwner ? getOwner(this) : this.get('container');
    // jscs:enable disallowDirectPropertyAccess
    return owner.lookup('service:materialize-settings');
  })
});
