import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-modal';

const { Component, computed, computed: { oneWay } } = Ember;

export default Component.extend(UsesSettings, {
  layout,

  acceptsKeyResponder: true,
  attributeBindings: ['style:inlineStyle'],
  concatenatedProperties: ['modalClassNames'],

  inlineStyle: computed(function() {
    return new Ember.Handlebars.SafeString('z-index: 1000;');
  }),

  isFooterFixed: oneWay('_mdSettings.modalIsFooterFixed'),

  modalClassNames: ['modal', 'show'],
  _modalClassString: computed('modalClassNames.[]', 'class', 'isFooterFixed', function() {
    const names = this.get('modalClassNames');
    if (this.get('isFooterFixed')) {
      names.push('modal-fixed-footer');
    }
    if (this.get('class')) {
      names.push(this.get('class'));
    }
    return names.join(' ');
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
