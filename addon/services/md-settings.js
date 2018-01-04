import { keys as emberKeys } from '@ember/polyfills';
import { set, getWithDefault } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import Service from '@ember/service';
import { classify } from '@ember/string';
// jscs:disable disallowDirectPropertyAccess
const keys = Object.keys || emberKeys;
// jscs:enable disallowDirectPropertyAccess

export default Service.extend({
  // Footer
  modalIsFooterFixed: oneWay('defaultModalIsFooterFixed'),
  // Button
  buttonIconPosition: oneWay('defaultButtonIconPosition'),
  // Loader
  loaderSize: oneWay('defaultLoaderSize'),
  loaderMode: oneWay('defaultLoaderMode'),
  // Modal
  modalContainerId: oneWay('defaultModalContainerId'),

  // Animation (Dropdown Button)
  dropdownInDuration: oneWay('defaultDropdownInDuration'),
  dropdownOutDuration: oneWay('defaultDropdownOutDuration'),

  init() {
    this._super(...arguments);
    this._setDefaults();
  },

  _setDefaults() {
    const defaults = getWithDefault(this, 'materializeDefaults', {});
    keys(defaults).map(key => {
      const classifiedKey = classify(key);
      const defaultKey = `default${classifiedKey}`;
      return set(this, defaultKey, defaults[key]);
    });
  }
});
