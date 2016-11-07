import Ember from 'ember';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import SelectableItemGroup from './selectable-item-group';
import _computed from 'ember-new-computed';

const { computed, computed: { alias }, Component } = Ember;

export default Component.extend(ChildComponentSupport, {
  _parentComponentTypes: [SelectableItemGroup],
  checked: null,
  disabled: false,
  classNames: ['materialize-selectable-item'],

  _checked: _computed('checked', 'group.selection', 'group.selection.[]', {
    get() {
      let group = this.get('group');
      if (!group) {
        return this.get('checked');
      } else {
        return group.isValueSelected(this.get('value'));
      }
    },
    set(key, val) {
      let group = this.get('group');
      if (!group) {
        this.set('checked', val);
      } else {
        group.setValueSelection(this.get('value'), val);
      }
      this.sendAction('action', { checked: !!val });

      //Because the click() event is fired twice (on checkboxes at least), need to reset this var to its default
      //so the click action can be fired again on the next click
      this.set('clickActionWasSent', false);
      return !!val;
    }
  }),

  isSelected: alias('_checked'),

  _setupLabel() {
    let [$input] = this.$('.materialize-selectable-item-input, .materialize-selectable-item-input-container input').toArray();

    let inputId = $input ? $input.id : null;
    this.$('.materialize-selectable-item-label').attr('for', inputId);
  },

  didInsertElement() {
    this._super(...arguments);
    this._setupLabel();
  },
  onClick: null,
  //For some reason, click is called twice, requiring a variable to avoid sending the action twice
  clickActionWasSent: false,
  click(){
    this._super(...arguments);
    let clickAction = this.get('onClick');
    let isSelected = !this.get('isSelected');

    if(!this.get('clickActionWasSent'))
    {
      if(typeof clickAction === "function")
      {
        clickAction(isSelected);
      }
      else if(typeof clickAction === "string"){
        this.sendAction('onClick', isSelected);
      }
      this.set('clickActionWasSent', true);
    }
  },

  group: computed(function() {
    return this.nearestWithProperty('__materializeSelectableItemGroup');
  })
});
