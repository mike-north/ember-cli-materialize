import Ember from 'ember';
import layout from '../templates/components/md-default-column-header';

const { Component, computed: { alias } } = Ember;

export default Component.extend({
  tagName: 'th',
  layout,
  attributeBindings: ['data-field'],
  'data-field': alias('column.valueBindingPath')
});
