import Component from '@ember/component';
import { bool } from '@ember/object/computed';
import layout from '../templates/components/md-collection';

export default Component.extend({
  layout,
  classNames: ['collection'],
  classNameBindings: ['_hasHeader:with-header'],
  headerComponentName: 'md-default-collection-header',
  header: null,
  _hasHeader: bool('header')
});
