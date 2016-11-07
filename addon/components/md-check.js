import Ember from 'ember';
import SelectableItem from './selectable-item';
import layout from '../templates/components/md-checkbox';

const { computed: { alias } } = Ember;

export default SelectableItem.extend({
  layout,
  text: alias('name'),
  classNames: ['materialize-checkbox'],
  click: null,
  actions: {
    clickAction(){
      let clickAction = this.get('click');
      let isSelected = this.get('isSelected');

      if(typeof clickAction === "function")
      {
        clickAction(isSelected);
      }
      else if(typeof clickAction === "string"){
        this.sendAction(clickAction, isSelected);
      }
    }
  }
});
