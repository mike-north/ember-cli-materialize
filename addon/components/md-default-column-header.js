import Ember from 'ember';
import layout from '../templates/components/md-default-column-header';
const { computed: { alias } } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'th',
  attributeBindings: ['field:data-field'],
  field: alias('column.valueBindingPath'),
  column: null
});