import Ember from 'ember';
import InputField from './materialize-input-field';
import layout from '../templates/components/materialize-textarea';

export default InputField.extend({
  layout: layout,
  didInsertElement: function() {
    this._super();
    // make sure the label moves when a value is bound.
    var labelSelector = this.$('>label');
    if (Ember.isPresent(this.get('value')) && !labelSelector.hasClass('active')) {
      labelSelector.addClass('active');
    }
  }
});
