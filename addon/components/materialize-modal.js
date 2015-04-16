import Ember from 'ember';
import YappModal from 'ember-modal-dialog/components/modal-dialog';
import layout from '../templates/components/materialize-modal';

export default YappModal.extend({
  layout: layout,
  destinationElementId: "materialize-modal-root-element",
  acceptsKeyResponder: true,
  overlayClassNames: ['lean-modal'],
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
