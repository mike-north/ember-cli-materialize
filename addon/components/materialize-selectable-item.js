import Ember from 'ember';

export default Ember.Component.extend({
  checked: null,
  classNames: ['materialize-selectable-item'],
  _checked: Ember.computed('group.selection', 'group.selection.[]', function (key, val) {
    var group = this.get('group');
    if (!group) {
      if (arguments.length <= 1) {
        return this.get('checked');
      }
      else {
        this.set('checked', val);
        return val;
      }
    }
    else {
      // Operate in the context of a group. The group owns
      // the selection state
      if (arguments.length <= 1) {
        // get
        return group.isValueSelected(this.get('value'));
      }
      else {
        //set
        group.setValueSelection(this.get('value'), val);
        return !!val;
      }
    }
  }),

  isSelected: Ember.computed.alias('_checked'),
  _setupLabel() {
    var $input = this.$('.selectable-item-input')[0];

    var inputId = $input ? $input.id : null;
    if (inputId) {
      this.$('.selectable-item-label').attr('for', inputId);
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this._setupLabel();
  },

  group: Ember.computed(function () {
    return this.nearestWithProperty('__materializeSelectableItemGroup');
  })
});
