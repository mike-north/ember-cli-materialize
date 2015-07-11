import Ember from 'ember';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import MdTabs from './md-tabs';
import layout from '../templates/components/md-tab';
import computed from 'ember-new-computed';

const { computed: { oneWay } } = Ember;

export default Ember.Component.extend(ChildComponentSupport, {
  _parentComponentTypes: [MdTabs],
  tagName: 'li',
  layout: layout,

  classNames: ['materialize-tabs-tab', 'tab', 'col'],
  classNameBindings: ['_colClass'],

  colWidth: oneWay('composableParent.colWidth'),

  click() {
    this.get('composableParent').send('tabClicked', this);
  },

  _colClass: computed('colWidth', {
    get() {
      return `s${this.get('colWidth')}`;
    }
  })

});
