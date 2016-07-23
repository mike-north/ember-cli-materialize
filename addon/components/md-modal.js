import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-modal';
import {
  EKMixin,
  keyUp
} from 'ember-keyboard';

const {
  Component,
  computed,
  computed: {
    oneWay
  },
  String: {
    htmlSafe
  },
  on
} = Ember;

export default Component.extend(EKMixin, UsesSettings, {
  layout,

  attributeBindings: ['style:inlineStyle'],
  concatenatedProperties: ['modalClassNames'],

  inlineStyle: computed(function() {
    return htmlSafe('z-index: 1000;');
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

  init() {
    this._super(...arguments);
    this.set('keyboardActivated', true);
  },

  _onEsc: on(keyUp('Escape'), function() {
    this.cancel();
  }),

  cancel() {
    this.sendAction('close');
  },

  actions: {
    closeModal() {
      this.sendAction('close');
    }
  }

});