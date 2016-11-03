import Ember from 'ember';
import layout from '../templates/components/md-dropdown-menu';

const { Component, run: { next } } = Ember;

export default Component.extend({
  _dropdownRoot: null,
  classNames: ['md-dropdown-menu', 'dropdown-content'],
  layout,
  tagName: 'ul',
  init() {
    this._super(...arguments);
    next(() => {
      if (this.get('_dropdownRoot') && this.get('_dropdownRoot').set) {
        this.get('_dropdownRoot').set('_dropdownMenuId', this.elementId);
        this.get('_dropdownRoot').setupDropdown();
      } else {
        throw 'No dropdown root specified for md-dropdown-menu';
      }
    });
  }
});
