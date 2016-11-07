import Ember from 'ember';
import SelectableItem from './selectable-item';
import layout from '../templates/components/md-checkbox';

const { computed: { alias } } = Ember;

export default SelectableItem.extend({
  layout,
  text: alias('name'),
  classNames: ['materialize-checkbox']
});
