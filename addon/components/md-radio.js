import Ember from 'ember';
import SelectableItem from './selectable-item';
import layout from '../templates/components/md-radio';
import computed from 'ember-new-computed';

export default SelectableItem.extend({
  layout: layout,

  value: '',
  groupValue: Ember.computed.alias('group.selection'),

  className: ['materialize-radio'],

  checked: computed('groupValue', 'value', {
    get() {
      return this.get('groupValue') === this.get('value');
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    Ember.assert(!Ember.isEmpty(this.get('group')), 'materialize-radio is not supported outside the context of a materialize-radio-group');
  }
});
