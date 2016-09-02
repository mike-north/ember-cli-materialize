import Ember from 'ember';

import InputField from './md-input-field';
import layout from '../templates/components/md-textarea';

const {
  observer,
  on
} = Ember;

export default InputField.extend({
  layout,

  _resizeHandler: on('afterRender', observer('value', function() {
    this._autoresize();
  })),

  didInsertElement() {
    this._super(...arguments);
    // make sure the label moves when a value is bound.
    this._setupLabel();
    this._autoresize();
  },

  _autoresize() {
    this.$(this.element).find('textarea').trigger('autoresize');
  }
});
