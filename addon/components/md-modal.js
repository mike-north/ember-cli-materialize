import Ember from 'ember';
import $ from 'jquery';
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
  _modalClassString: computed('modalClassNames.[]', 'isFooterFixed', function() {
    const names = this.get('modalClassNames');
    if (this.get('isFooterFixed')) {
      names.push('modal-fixed-footer');
    }
    return names.join(' ');
  }),

  didInsertElement() {
    this._super(...arguments);
    this.becomeKeyResponder();
    var onInsert = this.getAttr('onInsert');
    var bodyClassName = this.getAttr('bodyClassName');
    if (bodyClassName) {
      $('body').addClass(bodyClassName);
    }
    if (onInsert) {
      onInsert();
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    this.resignKeyResponder();
    var onDestroy = this.getAttr('onDestroy');
    var bodyClassName = this.getAttr('bodyClassName');
    if (bodyClassName) {
      $('body').removeClass(bodyClassName);
    }
    if (onDestroy) {
      onDestroy();
    }
  },

  cancel() {
    this.closeModal();
  },

  actions: {
    closeModal() {
      this.closeModal();
    }
  },

  closeModal(){
    if (this.getAttr('onClose')){
      this.getAttr('onClose')();
    } else {
      this.sendAction('close');  
    }
  }

});
