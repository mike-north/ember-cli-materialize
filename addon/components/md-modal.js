import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-modal';
import { EKMixin, keyUp } from 'ember-keyboard';

const { Component, on, computed, computed: { oneWay } } = Ember;

export default Component.extend(EKMixin, UsesSettings, {
  layout,

  keyboardActivated: true,
  keyboardFirstResponder: true,

  attributeBindings: ['style:inlineStyle'],
  concatenatedProperties: ['modalClassNames'],

  inlineStyle: computed(function() {
    return new Ember.Handlebars.SafeString('z-index: 1000;');
  }),

  isFooterFixed: oneWay('_mdSettings.modalIsFooterFixed'),

  modalClassNames: ['modal', 'show'],
  _modalClassString: computed('modalClassNames.[]', 'isFooterFixed', function() {
    const names = this.get('modalClassNames');
    if (this.get('isFooterFixed')) {
      names.push('modal-fixed-footer');
    }
    return names.join(' ');
  }),

  cancel: on(keyUp('Escape'), function() {
    this.closeModal();
  }),

  actions: {
    closeModal() {
      this.sendAction('close');
    }
  }

});
