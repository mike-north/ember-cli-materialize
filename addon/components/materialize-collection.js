import Ember from 'ember';
import layout from '../templates/components/materialize-collection';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ul',
  classNames: ['collection'],
});
