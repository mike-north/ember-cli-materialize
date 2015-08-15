import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import layout from '../templates/components/md-tabs';
import _computed from 'ember-new-computed';

const { get, Component, computed, computed: { alias }, run: { debounce } } = Ember;

export default Component.extend(ParentComponentSupport, {
  layout,
  classNames: ['materialize-tabs', 'row'],

  content: null,
  numTabs: alias('composableChildren.length'),
  _selected: null,
  optionValuePath: 'id',
  optionLabelPath: 'title',
  colWidth: 2,

  didInsertElement() {
    this._super(...arguments);
    this._setInitialTabSelection();
    this._updateIndicatorPosition(false);
  },

  selected: _computed('_selected', {
    get() {
      return this.get('_selected');
    },
    set(key, newVal) {
      const tabComponents = this.tabComponents();
      let tc = tabComponents.findBy('value', newVal);
      if (tc) {
        this._setActiveTab(tc);
      }
      return newVal;
    }
  }),

  _indicatorUpdater: Ember.observer('selected', 'content.[]', 'composableChildren.[]', function() {
    debounce(this, this._updateIndicatorPosition, 100);
  }),

  tabComponents() {
    const tabComponents = this.get('composableChildren') || Ember.A();
    tabComponents.reverse();
    return tabComponents;
  },

  _setInitialTabSelection() {
    const tabComponents = this.tabComponents();
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
    const [tabComponent] = (this.get('composableChildren') || []).filter(item => get(item, 'value') === this.get('selected'));
    const tabSetRect = this.element.getBoundingClientRect();
    if (tabComponent) {
      const tabRect = tabComponent.element.getBoundingClientRect();

      const cssParams = {
        left: tabRect.left - tabSetRect.left,
        right: tabSetRect.right - tabRect.right
      };

      if (!animate) {
        this.$('.indicator').css(cssParams);
      } else {
        this.$('.indicator1').velocity(cssParams, { duration: 150 });
        this.$('.indicator2').velocity(cssParams, { duration: 150, delay: 40 });
      }
    }
  },

  _content: computed('content.[]', 'optionLabelPath', 'optionValuePath', function() {
    const labelPath = this.get('optionLabelPath');
    const valuePath = this.get('optionValuePath');
    return new Ember.A((this.get('content') || []).map(contentItem => ({ id: contentItem[valuePath], title: contentItem[labelPath] })));
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
