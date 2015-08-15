import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-modal-container';

const { Component, computed: { oneWay } } = Ember;

export default Component.extend(UsesSettings, {
  layout,
  modalContainerId: oneWay('_mdSettings.modalContainerId')
});
