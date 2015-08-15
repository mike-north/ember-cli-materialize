import Ember from 'ember';
import layout from '../templates/components/md-btn-dropdown';
import MaterializeButton from './md-btn';

const { run: { scheduleOnce }, computed } = Ember;

export default MaterializeButton.extend({
  layout,
  tagName: 'a',
  classNames: ['dropdown-button'],
  icon: 'mdi-navigation-expand-more',
  iconPosition: 'right',
  attributeBindings: [
    'inDuration', 'outDuration', 'constrainWidth', 'hover', 'gutter', 'belowOrigin'
  ],

  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', this, this._setupDropdown);
  },

  _setupDropdown() {
    // needed until the Materialize.dropdown plugin is replaced
    this.$().attr('data-activates', this.get('_dropdownContentId'));

    this.$().dropdown({
      hover: !!this.getWithDefault('hover', false),
      constrainWidth: !!this.getWithDefault('constrainWidth', true),
      inDuration: this.getWithDefault('inDuration', this.get('_mdSettings.dropdownInDuration')),
      outDuration: this.getWithDefault('outDuration', this.get('_mdSettings.dropdownOutDuration')),
      gutter: this.getWithDefault('gutter', 0),
      belowOrigin: !!this.getWithDefault('belowOrigin', false)
    });
  },
  _dropdownContentId: computed(function() {
    return `${this.get('elementId')}-dropdown-content`;
  })
});
