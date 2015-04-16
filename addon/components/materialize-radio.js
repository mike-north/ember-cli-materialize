import Ember from 'ember';
import SelectableItem from './materialize-selectable-item';
import layout from '../templates/components/materialize-radio';

export default SelectableItem.extend({
  layout: layout,
  className: ['materialize-radio'],
  groupName: Ember.computed.alias('group.element.id'),

  _inputId: Ember.computed('element.id', function () {
    return this.get('element.id') + 'input';
  }).readOnly(),

  didInsertElement() {
    this._super(...arguments);
    this._checkboxInitialization();
  },

  _checkboxInitialization() {
    /*
      Workaround for a limitation of the {{input}} helper, where
      the checked property doesn't two-way bind as expected when
      type="radio" is used
     */
    this._radioChangeListener = jqEvt => this.set('isSelected', jqEvt.target.checked);

    this.$('.selectable-item-input')
      .on('change', this._radioChangeListener);

    // Potentially part of the same workaround. We need to
    //  set the initial state of the radio button explicitly
    this.$('.selectable-item-input')
      .prop('checked', this.get('isSelected'));
  },

  willDestroyElement() {
    this.$('.selectable-item-input')
      .off('change', this._radioChangeListener);
  }
});
