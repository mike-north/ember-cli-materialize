import Ember from 'ember';
import layout from '../templates/components/md-select';

const { run: { scheduleOnce }, computed, Component } = Ember;

export default Component.extend({
  classNames: ['md-select', 'input-field'],
  content: null,
  optionValueProp: '',
  optionDisplayProp: '',
  contentIconProp: '',
  iconAlign: 'right',
  optionClass: 'circle',
  value: null,
  placeholder: null,
  _isDropdownOpen: false,
  layout,
  _placeholderText: computed('placeholder', 'value', function() {
    const ph = this.get('placeholder');
    if (ph) {return ph;}
    const val = this.get('value');
    if (!val) {return ' ';}
    else {return null;}
  }),

  init() {
    this._super(...arguments);
    let content = this.get('content');
    if (!content) {
      this.set('content', []);
    }
  },
  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', () => {
      this.$('select').material_select();
    });
  },
  _selectClasses: computed('contentIconProp', function() {
    return this.get('contentIconProp') ? 'icons' : '';
  }),
  _choices: computed('content', 'optionValueProp', 'optionDisplayProp', {
    get() {
      const arr = this.get('content') || [];
      const choices = arr.map((x) => {
        return {
          value: Ember.get(x, this.get('optionValueProp')),
          text:  Ember.get(x, this.get('optionDisplayProp')),
          icon: this.get('contentIconProp') ? Ember.get(x, this.get('contentIconProp')) : null
        };
      });
      return choices;
    }
  }),

  _rebuildSelect() {
    this.$('select').material_select('destroy');
    this.$('select').material_select();
  },

  actions: {
    change() {
      const selectedEl = this.$('select')[0];
      const selectedIndex = selectedEl.selectedIndex;
      const content = this.get('content');
      const shift = this.get('_placeholderText') ? 1 : 0;
      const selectedValue = content[selectedIndex - shift];
      this.set('value', selectedValue);
      Ember.run.schedule('afterRender', () => {
        this._rebuildSelect();
      });
      this.sendAction('on-change', selectedValue);
    }
  }
});
