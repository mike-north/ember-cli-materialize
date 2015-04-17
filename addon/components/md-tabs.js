import Ember from 'ember';
import layout from '../templates/components/md-tabs';
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

  init() {
    this._super(...arguments);
    this.set('_tabComponents', Ember.A([]));
  },

  _updateIndicatorPosition(animate=true) {
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
    var labelPath = this.get('optionLabelPath');
    var valuePath = this.get('optionValuePath');
    return new Ember.A(map(this.get('content') || [], contentItem => ({id: contentItem[valuePath], title: contentItem[labelPath]})));
  }),

  didInsertElement() {
    this._super(...arguments);
    var tabComponents = this.get('_tabComponents');
    if (this.get('selected') === null && tabComponents.length > 0) {
      this.set('selected', tabComponents[tabComponents.length - 1].get('value'));
    }
    this._updateIndicatorPosition(false);
    this._indicatorUpdater = () => this._updateIndicatorPosition();
    this.addObserver('selected', this._indicatorUpdater);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.removeObserver('selected', this._indicatorUpdater);
  },

  _setActiveTab(tabComponent) {
    this.set('selected', tabComponent.get('value'));
  },

  registerTab(tabComponent) {
    this.get('_tabComponents').addObject(tabComponent);
    tabComponent.on('tabClicked', tab => this._setActiveTab(tab));
  }
});
