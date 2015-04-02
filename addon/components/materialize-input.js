import Ember from 'ember';
import MaterializeInputField from './materialize-input-field';
import layout from '../templates/components/materialize-input';

export default MaterializeInputField.extend({
  layout: layout,
  type: 'text',
  didInsertElement: function() {
    this._super();
    // make sure the label moves when a value is bound.
    var labelSelector = this.$('>label');
    if (Ember.isPresent(this.get('value')) && !labelSelector.hasClass('active')) {
      labelSelector.addClass('active');
    }
  }
});
