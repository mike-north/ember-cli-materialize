import SelectableItemGroup from './selectable-item-group';
import RadioComponent from './md-radio';
import GroupSelectableItemMixin from '../mixins/group-selectable-item';

const GroupRadioComponent = RadioComponent.extend(GroupSelectableItemMixin, {});

export default SelectableItemGroup.extend({
  selectableItemView: GroupRadioComponent
});
