import Ember from 'ember';
import layout from '../templates/components/materialize-tabs';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ul',
  classNames: ['materialize-tabs', 'tabs'],
  ___materializeTabs: true,
  _tabComponents: null,
  numTabs: Ember.computed.alias('_tabComponents.length'),
  selected: null,

  init: function () {
    this._super(...arguments);
    this.set('_tabComponents', new Ember.A([]));
  },

  _updateIndicatorPosition: function (animate=true) {
    var tabComponent = this.get('_tabComponents').filterBy('value', this.get('selected'))[0];
    var tabSetRect = this.element.getBoundingClientRect();
    if (tabComponent) {
      var tabRect = tabComponent.element.getBoundingClientRect();

      var cssParams = {
        left: tabRect.left - tabSetRect.left,
        right: tabSetRect.right - tabRect.right
      };

      if (!animate) {
        this.$('.indicator').css(cssParams);
      }
      else {
        this.$('.indicator1').velocity(cssParams, {duration: 150});
        this.$('.indicator2').velocity(cssParams, {duration: 150, delay: 40});
      }
    }
  },

  didInsertElement: function () {
    this._super(...arguments);
    if (this.get('selected') === null && this.get('content.length') > 0) {
      this.set('selected', this.get('content')[0].id);
    }
    this._updateIndicatorPosition(false);
  },

  _setActiveTab: function (tabComponent) {
    this.set('selected', tabComponent.get('value'));
    this._updateIndicatorPosition();
  },

  registerTab: function (tabComponent) {
    this.get('_tabComponents').addObject(tabComponent);
    tabComponent.on('tabClicked', function (tab) {
      this._setActiveTab(tab);
    }.bind(this));
  }
});
