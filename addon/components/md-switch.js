import { computed } from '@ember/object';
import SelectableItem from './selectable-item';
import layout from '../templates/components/md-switch';

export default SelectableItem.extend({
  layout,

  classNames: ['switch', 'materialize-switch'],

  offLabel: 'Off',
  onLabel: 'On',
  disabled: false,

  _labelClass: computed('name', function() {
    return this.get('name') ? 'right' : '';
  })
});
