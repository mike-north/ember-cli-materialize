import SelectableItem from './selectable-item';
import layout from '../templates/components/md-switch';
import computed from 'ember-new-computed';

export default SelectableItem.extend({
  layout,

  classNames: ['switch', 'materialize-switch'],

  offLabel: 'Off',
  onLabel: 'On',
  disabled: false,

  _labelClass: computed('name', {
    get() {
      return this.get('name') ? 'right' : '';
    }
  })
});
