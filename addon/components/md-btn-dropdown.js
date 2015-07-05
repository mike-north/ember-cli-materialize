import Ember from 'ember';
import layout from '../templates/components/md-btn-dropdown';
import computed from 'ember-new-computed';
import MaterializeButton from './md-btn';

const { computed: { oneWay } } = Ember;

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
      hover: this.getWithDefault('hover', false) === 'true',
      constrainWidth: this.getWithDefault('constrainWidth', true) === 'true',
      inDuration: this.getWithDefault('inDuration', oneWay('_mdSettings.inDuration')),
      outDuration: this.getWithDefault('outDuration', oneWay('_mdSettings.outDuration')),
      gutter: this.getWithDefault('gutter', 0),
      belowOrigin: this.getWithDefault('belowOrigin', false) === 'true'
    });
  },
  _dropdownContentId: computed({
    get() {
      return `${this.get('element.id')}-dropdown-content`;
    }
  })
});
