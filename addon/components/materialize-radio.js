import Ember from 'ember';
import SelectableItem from './materialize-selectable-item';
import layout from '../templates/components/materialize-radio';

export default SelectableItem.extend({
  layout: layout,

  value: '',
  groupValue: Ember.computed.alias('group.selection'),

  className: ['materialize-radio'],

  checked: Ember.computed('groupValue', 'value', function () {
    return this.get('groupValue') === this.get('value');
  }).readOnly(),

  didInsertElement() {
    this._super(...arguments);
    Ember.assert(!Ember.isEmpty(this.get('group')), 'materialize-radio is not supported outside the context of a materialize-radio-group');
  }
});
