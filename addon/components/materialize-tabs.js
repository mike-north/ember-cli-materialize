import Ember from 'ember';
import layout from '../templates/components/materialize-tabs';
var map = Ember.EnumerableUtils.map;

export default Ember.Component.extend({
  layout: layout,
  content: null,
  classNames: ['materialize-tabs', 'row'],
  ___materializeTabs: true,
  _tabComponents: null,
  numTabs: Ember.computed.alias('_tabComponents.length'),
  selected: null,
  optionValuePath: 'id',
  optionLabelPath: 'title',
  colWidth: 2,

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

  _content: Ember.computed('content.[]', 'optionLabelPath', 'optionValuePath', function () {
    var lp = this.get('optionLabelPath');
    var vp = this.get('optionValuePath');
    return new Ember.A(map(this.get('content') || [], c => ({id: c[vp], title: c[lp]})));
  }),

  didInsertElement: function () {
    this._super(...arguments);
    var tabComponents = this.get('_tabComponents');
    if (this.get('selected') === null && tabComponents.length > 0) {
      this.set('selected', tabComponents[tabComponents.length - 1].get('value'));
    }
    this._updateIndicatorPosition(false);
    this.addObserver('selected', function () {
      this._updateIndicatorPosition();
    });
  },

  _setActiveTab: function (tabComponent) {
    this.set('selected', tabComponent.get('value'));
  },

  registerTab: function (tabComponent) {
    this.get('_tabComponents').addObject(tabComponent);
    tabComponent.on('tabClicked', this, function (tab) {
      this._setActiveTab(tab);
    });
  }
});
