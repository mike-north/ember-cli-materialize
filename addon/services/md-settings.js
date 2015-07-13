import Ember from 'ember';

const { keys, getWithDefault, set, computed: { oneWay } } = Ember;
const { classify } = Ember.String;

export default Ember.Service.extend({
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
