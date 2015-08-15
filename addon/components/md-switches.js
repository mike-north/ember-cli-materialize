import SelectableItemGroup from './selectable-item-group';
import GroupSelectableItemMixin from '../mixins/group-selectable-item';
import SwitchComponent from './md-switch';

const GroupSwitchComponent = SwitchComponent.extend(GroupSelectableItemMixin, { });

export default SelectableItemGroup.extend({
  selectableItemView: GroupSwitchComponent,
  multiple: true
});
