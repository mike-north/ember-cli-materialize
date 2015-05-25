import Ember from 'ember';
import layout from '../templates/components/md-tabs';
import computed from 'ember-new-computed';

var map = Ember.EnumerableUtils.map;

export default Ember.Component.extend({
  layout: layout,
  classNames: ['materialize-tabs', 'row'],

  content: null,
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

  didInsertElement() {
    this._super(...arguments);
    this._setInitialTabSelection();
    this._updateIndicatorPosition(false);

    // An observer to update indicator position when tabs change
    this._indicatorUpdater = () => this._updateIndicatorPosition();
    this.addObserver('selected', this._indicatorUpdater);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.removeObserver('selected', this._indicatorUpdater);
  },

  _setInitialTabSelection() {
    var tabComponents = this.get('_tabComponents');
    if (this.get('selected') === null && tabComponents.length > 0) {
      var emberParsingRegex = /^([0-9]+)\.([0-9]+)\.([0-9]+)/;
      var versionParts = emberParsingRegex.exec(Ember.VERSION);
      if (parseInt(versionParts[1], 10) > 1 || parseInt(versionParts[2], 10) >= 13) {
        tabComponents.reverse();
      }
      this.set('selected', tabComponents[tabComponents.length - 1].get('value'));
    }
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

  _content: computed('content.[]', 'optionLabelPath', 'optionValuePath', {
    get() {
      var labelPath = this.get('optionLabelPath');
      var valuePath = this.get('optionValuePath');
      return new Ember.A(map(this.get('content') || [], contentItem => ({id: contentItem[valuePath], title: contentItem[labelPath]})));
    }
  }),


  _setActiveTab(tabComponent) {
    this.set('selected', tabComponent.get('value'));
  },

  registerTab(tabComponent) {
    this.get('_tabComponents').addObject(tabComponent);
    tabComponent.on('tabClicked', tab => this._setActiveTab(tab));
  }
});
