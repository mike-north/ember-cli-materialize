import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import layout from '../templates/components/md-tabs';

const { get, Component, computed, computed: { alias }, run: { debounce } } = Ember;

const EMBER_VERSION_REGEX = /^([0-9]+)\.([0-9]+)\.([0-9]+)(?:(?:\-(alpha|beta)\.([0-9]+)(?:\.([0-9]+))?)?)?(?:\+(canary))?(?:\.([0-9abcdef]+))?(?:\-([A-Za-z0-9\.\-]+))?(?:\+([A-Za-z0-9\.\-]+))?$/;

// VERSION_INFO[i] is as follows:
// 0  complete version string
// 1  major version
// 2  minor version
// 3  trivial version
// 4  pre-release type (optional: "alpha" or "beta" or undefined for stable releases)
// 5  pre-release version (optional)
// 6  pre-release sub-version (optional)
// 7  canary (optional: "canary", or undefined for stable releases)
// 8  SHA (optional)

const VERSION_INFO = EMBER_VERSION_REGEX.exec(Ember.VERSION);
const IS_PRE_113 = parseInt(VERSION_INFO[1], 10) < 2 && parseInt(VERSION_INFO[2], 10) < 13;

export default Component.extend(ParentComponentSupport, {
  layout,
  classNames: ['materialize-tabs', 'row'],

  content: null,
  numTabs: alias('composableChildren.length'),
  optionValuePath: 'id',
  optionLabelPath: 'title',
  colWidth: 2,

  selected: null,

  didInsertElement() {
    this._super(...arguments);
    this._updateIndicatorPosition(false);
  },

  _indicatorUpdater: Ember.observer('selected', 'content.[]', 'composableChildren.[]', function() {
    debounce(this, this._updateIndicatorPosition, 100);
  }),

  tabComponents() {
    const tabComponents = this.get('composableChildren') || Ember.A();
    if (IS_PRE_113) {
      tabComponents.reverse();
    }
    return tabComponents;
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
  })
});
