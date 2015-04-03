import Ember from 'ember';
import layout from '../templates/components/materialize-collection';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ul',
  hasHeader: false,
  classNames: ['collection'],
  classNameBindings: ['hasHeader:with-header'],
});
