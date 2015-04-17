import Ember from 'ember';
import InputField from './md-input-field';
import layout from '../templates/components/md-textarea';

export default InputField.extend({
  layout: layout,

  didInsertElement() {
    this._super(...arguments);
    // make sure the label moves when a value is bound.
    var labelSelector = this.$('>label');
    if (Ember.isPresent(this.get('value')) && !labelSelector.hasClass('active')) {
      labelSelector.addClass('active');
    }
  }
});
