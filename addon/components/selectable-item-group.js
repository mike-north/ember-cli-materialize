import Component from '@ember/component';
import { A } from '@ember/array';
import { computed, get } from '@ember/object';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import layout from '../templates/components/selectable-item-group';

export default Component.extend(ParentComponentSupport, {
  layout,

  content: null,
  selection: null,

  optionValuePath: 'content',
  optionLabelPath: 'content',
  multiple: false,
  __materializeSelectableItemGroup: true,

  init() {
    this._super(...arguments);
    if (this.get('selection') === null && !!this.get('multiple')) {
      this.set('selection', new A([]));
    }
  },

  isValueSelected(value) {
    if (this.get('multiple')) {
      return this.get('selection').indexOf(value) >= 0;
    } else {
      return this.get('selection') === value;
    }
  },

  setValueSelection(value, select) {
    if (select) {
      return this.addToSelection(value);
    } else {
      return this.removeFromSelection(value);
    }
  },

  addToSelection(value) {
    if (this.get('multiple')) {
      this.get('selection').addObject(value);
    } else {
      this.set('selection', value);
    }
  },

  removeFromSelection(value) {
    if (this.get('multiple')) {
      this.get('selection').removeObject(value);
    } else {
      if (this.get('selection') === value) {
        this.set('selection', null);
      }
    }
  },
  disabled: false,

  _valuePath: computed('optionValuePath', function() {
    const optionValuePath = get(this, 'optionValuePath');
    return optionValuePath.replace(/^content\.?/, '');
  }),

  _labelPath: computed('optionLabelPath', function() {
    const optionLabelPath = get(this, 'optionLabelPath');
    return optionLabelPath.replace(/^content\.?/, '');
  }),

  _content: computed('content.[]', '_valuePath', '_labelPath', function() {
    const valuePath = get(this, '_valuePath');
    const labelPath = get(this, '_labelPath');
    const content = get(this, 'content') || new A([]);

    if (valuePath && labelPath) {
      return A(
        content.map(el => {
          return { value: get(el, valuePath), label: get(el, labelPath) };
        })
      );
    } else {
      return A(
        content.map(el => {
          return { value: el, label: el };
        })
      );
    }
  })
});
