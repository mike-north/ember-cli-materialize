import Ember from 'ember';
import layout from '../templates/components/md-default-column-header';
const { computed: { alias } } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'th',
  attributeBindings: ['data-field'],
  'data-field': alias('column.valueBindingPath'),
  column: null
});