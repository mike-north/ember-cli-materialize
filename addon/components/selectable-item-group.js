import Ember from 'ember';
import layout from '../templates/components/selectable-item-group';
import computed from 'ember-new-computed';

var get = Ember.get,
  map = Ember.EnumerableUtils.map,
  indexOf = Ember.EnumerableUtils.indexOf;

export default Ember.Component.extend({
  layout: layout,

  content: null,
  selection: null,

  optionValuePath: 'content',
  optionLabelPath: 'content',
  multiple: false,
  __materializeSelectableItemGroup: true,

  init() {
    this._super(...arguments);
    if (this.get('selection') === null && !!this.get('multiple')) {
      this.set('selection', Ember.A());
    }
  },

  isValueSelected(value) {
    if (this.get('multiple')) {
      return indexOf(this.get('selection'), value) >= 0;
    }
    else {
      return this.get('selection') === value;
    }
  },

  setValueSelection(value, select) {
    if (select) {
      return this.addToSelection(value);
    }
    else {
      return this.removeFromSelection(value);
    }
  },

  addToSelection(value) {
    if (this.get('multiple')) {
      this.get('selection').addObject(value);
    }
    else {
      this.set('selection', value);
    }
  },

  removeFromSelection(value) {
    if (this.get('multiple')) {
      this.get('selection').removeObject(value);
    }
    else {
      throw new Error('removeFromSelection is not supported in single-selection mode');
    }
  },

  _valuePath: computed('optionValuePath',  {
    get() {
      var optionValuePath = get(this, 'optionValuePath');
      return optionValuePath.replace(/^content\.?/, '');
    }
  }),

  _labelPath: computed('optionLabelPath',  {
    get() {
      var optionLabelPath = get(this, 'optionLabelPath');
      return optionLabelPath.replace(/^content\.?/, '');
    }
  }),

  _content: computed('content.[]', '_valuePath', '_labelPath', {
    get() {
      var valuePath = get(this, '_valuePath');
      var labelPath = get(this, '_labelPath');
      var content = get(this, 'content') || Ember.A([]);

      if (valuePath && labelPath) {
        return Ember.A(
          map(content, el => {
            return {value: get(el, valuePath), label: get(el, labelPath)};
          })
        );
      } else {
        return Ember.A(
          map(content, el => {
            return {value: el, label: el};
          })
        );
      }
    }
  })
});
