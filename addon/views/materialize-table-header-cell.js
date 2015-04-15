import BaseCell from './materialize-table-cell-base';
import layout from '../templates/materialize-table-header-cell';

export default BaseCell.extend({
  tagName: 'th',
  layout: layout,
  attributeBindings: ['width']
});
