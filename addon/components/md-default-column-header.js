import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import layout from '../templates/components/md-default-column-header';

export default Component.extend({
  tagName: 'th',
  layout,
  attributeBindings: ['data-field'],
  'data-field': alias('column.valueBindingPath')
});
