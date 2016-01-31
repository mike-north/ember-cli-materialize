
export function initialize () {
  const application = arguments[1] || arguments[0];
  var rootEl = document.querySelector(application.rootElement);
  var modalContainerEl = document.createElement('div');
  var emberModalDialog = application.emberModalDialog || {};
  var modalContainerElId = emberModalDialog.modalRootElementId || 'modal-overlays';
  modalContainerEl.id = modalContainerElId;
  rootEl.appendChild(modalContainerEl);

  application.register('config:modals-container-id',
                       modalContainerElId,
                       { instantiate: false });
  application.inject('component:materialize-modal',
                     'destinationElementId',
                     'config:modals-container-id');
}

export default {
  name: 'add-modals-container',
  initialize: initialize
};
