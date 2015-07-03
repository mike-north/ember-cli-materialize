import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import YappModal from 'ember-modal-dialog/components/modal-dialog';
import layout from '../templates/components/md-modal';
import computed from 'ember-new-computed';

const { computed: { oneWay } } = Ember;

export default YappModal.extend(UsesSettings, {
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

  isFooterFixed: oneWay('_mdSettings.modalIsFooterFixed'),

  modalClassNames: ['modal', 'show'],
  _modalClassString: computed('modalClassNames.@each', 'isFooterFixed', {
    get() {
      let names = this.get('modalClassNames');
      if (this.get('isFooterFixed')) {
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
