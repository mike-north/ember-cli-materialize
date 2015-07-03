import YappModal from 'ember-modal-dialog/components/modal-dialog';
import layout from '../templates/components/md-modal';
import computed from 'ember-new-computed';

export default YappModal.extend({
  layout: layout,

  destinationElementId: "materialize-modal-root-element",
  acceptsKeyResponder: true,
  overlayId: 'lean-modal',
  attributeBindings: ['style:inlineStyle'],
  concatenatedProperties: ['modalClassNames'],

  inlineStyle: computed({
    get() {
      return 'z-index: 1000;';
    }
  }),

  fixedFooter: false,

  modalClassNames: ['modal', 'show'],
  _modalClassString: computed('modalClassNames.@each', 'fixedFooter', {
    get() {
      let names = this.get('modalClassNames');
      if (this.get('fixedFooter')) {
        names.push('modal-fixed-footer');
      }
      return names.join(' ');
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
