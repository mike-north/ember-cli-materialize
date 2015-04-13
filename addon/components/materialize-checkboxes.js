import SelectableItemGroup from './materialize-selectable-item-group';
import CheckboxComponent from './materialize-checkbox';
import GroupSelectableItemMixin from '../mixins/group-selectable-item';


var GroupCheckboxComponent = CheckboxComponent.extend(GroupSelectableItemMixin, { });

export default SelectableItemGroup.extend({
  selectableItemView: GroupCheckboxComponent,
  multiple: true
});
