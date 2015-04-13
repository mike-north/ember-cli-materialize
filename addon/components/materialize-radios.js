import SelectableItemGroup from './materialize-selectable-item-group';
import RadioComponent from './materialize-radio';
import GroupSelectableItemMixin from '../mixins/group-selectable-item';

var GroupRadioComponent = RadioComponent.extend(GroupSelectableItemMixin, { });

export default SelectableItemGroup.extend({
    selectableItemView: GroupRadioComponent
});
