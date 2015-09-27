import Ember from 'ember';
import SelectableItem from './selectable-item';
import layout from '../templates/components/md-radio';

const { computed, computed: { alias } } = Ember;

export default SelectableItem.extend({
  layout,

  value: '',
  text: alias('name'),
  groupValue: Ember.computed.alias('group.selection'),

  className: ['materialize-radio'],

  checked: computed('groupValue', 'value', function() {
    return this.get('groupValue') === this.get('value');
  }),

  didInsertElement() {
    this._super(...arguments);
    Ember.assert(!Ember.isEmpty(this.get('group')), 'materialize-radio is not supported outside the context of a materialize-radio-group');
  }
});
