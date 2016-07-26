import Ember from 'ember';
import FormField from './form-field';

const { computed, Mixin } = Ember;

export default Mixin.create(FormField, {
  disabled: false,
  inputClassNames: [],
  labelClassNames: [],
  active: false,
  value: null,
  concatenatedProperties: ['inputClassNames', 'labelClassNames'],
  _classesForInput: computed('inputClassNames', '_validateClass', function() {
    let classes = this.get('inputClassNames');
    return classes.concat([this.get('_validateClass')]).join(' ');
  }),
  _classesForLabel: computed('labelClassNames', function() {
    return this.get('labelClassNames').join(' ');
  }),
  _inputId: computed('elementId', function() {
    return `${this.get('elementId')}-${this._debugContainerKey.split(':')[1]}`;
  }),
  _validateClass: computed('validate', 'valid', 'value', function() {
    let v = this.get('validate');
    if (v === 'eager' || (v && this.get('value'))) {
      return this.get('valid') ? 'valid' : 'invalid';
    }
    else {
      return '';
    }
  }),
  init() {
    this._super(...arguments);
    this.set('active', this.get('value') || this.get('placeholder'));
  },
  actions: {
    onChange() {
      this._super(...arguments);
      this.sendAction('on-change');
    },
    onKeyDown() {
      this._super(...arguments);
      this.sendAction('on-key-down');
    },
    onKeyUp() {
      this._super(...arguments);
      this.sendAction('on-key-up');
    },
    onBlur() {
      this._super(...arguments);
      this.sendAction('on-blur');
    },
    onEnter() {
      this._super(...arguments);
      this.sendAction('enter');
    }
  }
});
