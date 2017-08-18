import Ember from 'ember';
import MaterializeInputField from './md-input-field';
import layout from '../templates/components/md-input';

const {
  get,
} = Ember;

export default MaterializeInputField.extend({
  layout,
  type: 'text',

  didInsertElement() {
    this._super(...arguments);
    // make sure the label moves when a value is bound.
    this._setupLabel();
  },

  actions: {
    enter(...args) {
      this._sendAction('onEnter', ...args);
    },

    keyPress(...args) {
      this._sendAction('onKeyPress', ...args);
    },

    keyUp(...args) {
      this._sendAction('onKeyUp', ...args);
    }
  },

  _sendAction(action, ...args) {
    if (typeof get(this, action) === 'function') {
      get(this, action)(...args);
    } else {
      this.sendAction(action, ...args);
    }
  }
});
