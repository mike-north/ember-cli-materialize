import Ember from 'ember';
import layout from '../templates/components/md-btn-dropdown';
import computed from 'ember-new-computed';
import MaterializeButton from './md-btn';

export default MaterializeButton.extend({
  layout: layout,
  tagName: 'a',
  classNames: ['dropdown-button'],
  icon: "mdi-navigation-expand-more",
  iconPosition: 'right',
  attributeBindings: [
    'inDuration', 'outDuration', 'constrainWidth', 'hover', 'gutter', 'belowOrigin'
  ],
  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, this._setupDropdown);
  },
  _setupDropdown() {
    // needed until the Materialize.dropdown plugin is replaced
    this.$().attr('data-activates', this.get('_dropdownContentId'));

    this.$().dropdown({
      hover: this.getWithDefault('hover', false),
      constrainWidth: this.getWithDefault('constrainWidth', true),
      inDuration: this.getWithDefault('inDuration', 300),
      outDuration: this.getWithDefault('outDuration', 300),
      gutter: this.getWithDefault('gutter', 0),
      belowOrigin: this.getWithDefault('belowOrigin', false)
    });
  },
  _dropdownContentId: computed({
    get() {
      return `${this.get('element.id')}-dropdown-content`;
    }
  })
});
