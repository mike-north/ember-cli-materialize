import Ember from 'ember';
import SelectableItem from './selectable-item';
import layout from '../templates/components/md-switch';

export default SelectableItem.extend({
  layout: layout,
  offLabel: 'Off',
  onLabel: 'On',
  disabled: false,

  classNames: ['switch', 'materialize-switch'],
  _labelClass: Ember.computed('name', function () {
    return this.get('name') ? 'right' : '';
  })
});
