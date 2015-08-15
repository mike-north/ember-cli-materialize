import MaterializeInputField from './md-input-field';
import layout from '../templates/components/md-input';

export default MaterializeInputField.extend({
  layout,
  type: 'text',

  didInsertElement() {
    this._super(...arguments);
    // make sure the label moves when a value is bound.
    this._setupLabel();
  }
});
