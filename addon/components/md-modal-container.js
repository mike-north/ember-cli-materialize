import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-modal-container';

const { computed: { oneWay } } = Ember;

export default Ember.Component.extend(UsesSettings, {
  modalContainerId: oneWay('_mdSettings.modalContainerId'),
  layout: layout
});
