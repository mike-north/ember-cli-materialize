import Ember from 'ember';
import layout from '../templates/components/md-btn-dropdown';
import MaterializeButton from './md-btn';

const { computed } = Ember;

export default MaterializeButton.extend({
  layout,
  tagName: 'a',
  classNames: ['dropdown-button'],
  icon: 'mdi-navigation-expand-more',
  iconPosition: 'right',
  attributeBindings: [
    'inDuration', 'outDuration', 'constrainWidth', 'hover', 'gutter', 'belowOrigin:data-beloworigin'
  ],

  didRender() {
    this._super(...arguments);
    this._setupDropdown();
  },

  _setupDropdown() {
    // needed until the Materialize.dropdown plugin is replaced
    this.$().attr('data-activates', this.get('_dropdownContentId'));
    let options = {
      hover: !!this.getWithDefault('hover', false),
      constrainWidth: !!this.getWithDefault('constrainWidth', true),
      inDuration: this.getWithDefault('inDuration', this.get('_mdSettings.dropdownInDuration')),
      outDuration: this.getWithDefault('outDuration', this.get('_mdSettings.dropdownOutDuration')),
      gutter: this.getWithDefault('gutter', 0),
      belowOrigin: !!this.getWithDefault('belowOrigin', false)
    };

    this.$().dropdown(options);
  },
  _dropdownContentId: computed(function() {
    return `${this.get('elementId')}-dropdown-content`;
  })
});
