import SelectableItemGroup from './materialize-selectable-item-group';
import GroupSelectableItemMixin from '../mixins/group-selectable-item';
import SwitchComponent from './materialize-switch';

var GroupSwitchComponent = SwitchComponent.extend(GroupSelectableItemMixin, { });

export default SelectableItemGroup.extend({
  selectableItemView: GroupSwitchComponent,
  multiple: true
});
