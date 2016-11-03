import Ember from 'ember';
import layout from '../templates/components/md-collection';

export default Ember.Component.extend({
  classNames: ['md-collection', 'collection'],
  classNameBindings: ['_hasHeader:with-header'],
  _hasHeader: false,
  layout
});
