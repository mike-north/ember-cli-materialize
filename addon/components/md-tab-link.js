import Ember from 'ember';
import layout from '../templates/components/md-tab-link';
import Tab from '../mixins/md-tab-base';

const { LinkComponent } = Ember;

export default LinkComponent.extend(Tab, {
  classNames: ['md-tab', 'tab'],
  tagName: 'li',
  layout
});
