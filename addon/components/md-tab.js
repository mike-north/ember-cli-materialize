import Component from '@ember/component';
import { computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import MdTabs from './md-tabs';
import layout from '../templates/components/md-tab';

export default Component.extend(ChildComponentSupport, {
  _parentComponentTypes: [MdTabs],
  tagName: 'li',
  layout,

  classNames: ['materialize-tabs-tab', 'tab', 'col'],
  classNameBindings: ['_colClass'],

  colWidth: oneWay('composableParent.colWidth'),

  _colClass: computed('colWidth', function() {
    return `s${this.get('colWidth')}`;
  }),

  active: computed('composableParent.composableChildren.[]', 'composableParent.selected', 'value', function() {
    const selected = this.get('composableParent.selected');
    if (selected) {
      return selected === this.get('value');
    } else {
      const values = this.get('composableParent')
        .tabComponents()
        .map(t => t.get('value'));
      return values.indexOf(this.get('value')) === 0;
    }
  }).readOnly(),

  click() {
    this.get('composableParent').set('selected', this.get('value'));
  }
});
