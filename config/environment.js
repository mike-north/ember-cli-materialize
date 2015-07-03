'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    materializeDefaults: {
      modalIsFooterFixed: false,
      buttonIconPosition: 'left',
      loaderSize: 'big',
      loaderMode: 'indeterminate',
      modalContainerId: 'materialize-modal-root-element'
    }
  };
};
