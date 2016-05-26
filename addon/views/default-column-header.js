import Ember from 'ember';
import layout from 'ember-cli-materialize/templates/default-column-header';

const { computed: { alias } } = Ember;

export default Ember.View.extend({
  tagName: 'th',
  layout,
  attributeBindings: ['data-field'],
  'data-field': alias('column.valueBindingPath')
});
