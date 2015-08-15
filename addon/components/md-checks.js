import SelectableItemGroup from './selectable-item-group';
import CheckboxComponent from './md-check';
import GroupSelectableItemMixin from '../mixins/group-selectable-item';

const GroupCheckboxComponent = CheckboxComponent.extend(GroupSelectableItemMixin, { });

export default SelectableItemGroup.extend({
  selectableItemView: GroupCheckboxComponent,
  multiple: true
});
