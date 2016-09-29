import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import layout from '../templates/components/md-tabs';

const { get,
  Component,
  computed,
  computed: {
    alias
  },
  run: {
    debounce
  },
  A,
  observer
} = Ember;

export default Component.extend(ParentComponentSupport, {
  layout,
  classNames: ['materialize-tabs', 'row'],
  composableChildrenDebounceTime: 1,
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

  _indicatorUpdater: observer('selected', 'content.[]', 'composableChildren.[]', function() {
    debounce(this, this._updateIndicatorPosition, 100);
  }),

  tabComponents() {
    return A(this.get('composableChildren')) || A();
  },

  _updateIndicatorPosition(animate = true) {
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
        this.$('.indicator1').velocity(cssParams, {
          duration: 150
        });
        this.$('.indicator2').velocity(cssParams, {
          duration: 150,
          delay: 40
        });
      }
    }
  },

  _content: computed('content.[]', 'optionLabelPath', 'optionValuePath', function() {
    const labelPath = this.get('optionLabelPath');
    const valuePath = this.get('optionValuePath');
    return new A((this.get('content') || []).map(contentItem => ({
      id: contentItem[valuePath],
      title: contentItem[labelPath]
    })));
  })
});