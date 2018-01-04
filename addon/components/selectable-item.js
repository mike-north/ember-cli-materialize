import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import SelectableItemGroup from './selectable-item-group';
import _computed from 'ember-new-computed';

export default Component.extend(ChildComponentSupport, {
  // eslint-disable-next-line
  _parentComponentTypes: [SelectableItemGroup],
  checked: null,
  disabled: false,
  classNames: ['materialize-selectable-item'],

  _checked: _computed('checked', 'group.selection', 'group.selection.[]', {
    get() {
      let group = this.get('group');
      if (!group) {
        return this.get('checked');
      } else {
        return group.isValueSelected(this.get('value'));
      }
    },
    set(key, val) {
      let group = this.get('group');
      if (!group) {
        this.set('checked', val);
      } else {
        group.setValueSelection(this.get('value'), val);
      }
      this.sendAction('action', { checked: !!val });
      return !!val;
    }
  }),

  isSelected: alias('_checked'),

  _setupLabel() {
    let [$input] = this.$(
      '.materialize-selectable-item-input, .materialize-selectable-item-input-container input'
    ).toArray();

    let inputId = $input ? $input.id : null;
    this.$('.materialize-selectable-item-label').attr('for', inputId);
  },

  didInsertElement() {
    this._super(...arguments);
    this._setupLabel();
  },

  group: computed(function() {
    return this.nearestWithProperty('__materializeSelectableItemGroup');
  })
});
