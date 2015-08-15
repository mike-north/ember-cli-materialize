import InputField from './md-input-field';
import layout from '../templates/components/md-textarea';

export default InputField.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);
    // make sure the label moves when a value is bound.
    this._setupLabel();
  }
});
