'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    materializeDefaults: {
      modalIsFooterFixed: false,
      modalContainerId: 'materialize-modal-root-element',
      buttonIconPosition: 'left',
      loaderSize: 'big',
      loaderMode: 'indeterminate'
    }
  };
};
