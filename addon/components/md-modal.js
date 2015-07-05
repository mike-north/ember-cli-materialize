import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-modal';
import computed from 'ember-new-computed';

const { computed: { oneWay } } = Ember;

export default Ember.Component.extend(UsesSettings, {
  layout: layout,

  acceptsKeyResponder: true,
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
  },

  actions: {
    closeModal() {
      this.sendAction('close');
    }
  }

});
