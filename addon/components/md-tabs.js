import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import layout from '../templates/components/md-tabs';
import computed from 'ember-new-computed';

var get = Ember.get;

export default Ember.Component.extend(ParentComponentSupport, {
  layout: layout,
  classNames: ['materialize-tabs', 'row'],

  content: null,
  numTabs: Ember.computed.alias('composableChildren.length'),
  _selected: null,
  optionValuePath: 'id',
  optionLabelPath: 'title',
  colWidth: 2,

  didInsertElement() {
    this._super(...arguments);
    this._setInitialTabSelection();
    this._updateIndicatorPosition(false);
  },

  selected: computed('_selected', {
    get() {
      return this.get('_selected');
    },
    set(key, newVal) {
      var tabComponents = this.tabComponents();
      let tc = tabComponents.findBy('value', newVal);
      if (tc) {
        this._setActiveTab(tc);
      }
      return newVal;
    }
  }),

  _indicatorUpdater: Ember.observer('selected', 'content.[]', 'composableChildren.[]', function () {
    Ember.run.debounce(this, this._updateIndicatorPosition, 100);
  }),

  tabComponents() {
    var tabComponents = this.get('composableChildren') || Ember.A();
    tabComponents.reverse();
    return tabComponents;
  },

  _setInitialTabSelection() {
    var tabComponents = this.tabComponents();
    if (this.get('selected') === null && tabComponents.length > 0) {
      let tc = tabComponents[tabComponents.length - 1];
      this._setActiveTab(tc);
    } else {
      if (this.get('selected')) {
        let tc = tabComponents.findBy('value', this.get('selected'));
        this._setActiveTab(tc);
      }
    }
  },

  _updateIndicatorPosition(animate=true) {
    if (!this.element) {
      return;
    }
    var tabComponent = (this.get('composableChildren') || []).filter(item => get(item, 'value') === this.get('selected'))[0];
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
      return new Ember.A((this.get('content') || []).map(contentItem => ({id: contentItem[valuePath], title: contentItem[labelPath]})));
    }
  }),


  _setActiveTab(tabComponent) {
    this.set('_selected', tabComponent.get('value'));
    tabComponent.set('active', true);
    this.tabComponents().forEach(tc => {
      if (tc !== tabComponent) {
        tc.set('active', false);
      }
    });
  },
  actions: {
    tabClicked(tab) {
      this._setActiveTab(tab);
    }
  }
});
