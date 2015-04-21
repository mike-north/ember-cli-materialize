import YappModal from 'ember-modal-dialog/components/modal-dialog';
import layout from '../templates/components/md-modal';
import computed from 'ember-new-computed';

export default YappModal.extend({
  layout: layout,

  destinationElementId: "materialize-modal-root-element",
  acceptsKeyResponder: true,
  overlayId: 'lean-modal',
  attributeBindings: ['style:inlineStyle'],

  inlineStyle: computed({
    get() {
      return 'z-index: 1000;';
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    this.becomeKeyResponder();
  },

  willDestroyElement() {
    this._super(...arguments);
    this.resignKeyResponder();
  },

  cancel() {
    this.sendAction('close');
  }

});
