import { alias } from '@ember/object/computed';
import SelectableItem from './selectable-item';
import layout from '../templates/components/md-checkbox';

export default SelectableItem.extend({
  layout,
  text: alias('name'),
  classNames: ['materialize-checkbox']
});
