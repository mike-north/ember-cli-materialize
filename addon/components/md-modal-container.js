import Component from '@ember/component';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-modal-container';

export default Component.extend(UsesSettings, {
  layout,
  modalContainerId: null,

  init() {
    this._super(...arguments);
    if (!this.get('modalContainerId')) {
      this.set('modalContainerId', this.get('_mdSettings.modalContainerId'));
    }
  }
});
