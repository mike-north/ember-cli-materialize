import Ember from 'ember';
import layout from '../templates/default-collection-header';

const { View } = Ember;

export default View.extend({
  layout,
  classNames: ['collection-header']
});
