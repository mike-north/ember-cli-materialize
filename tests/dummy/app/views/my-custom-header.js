// BEGIN-SNIPPET custom-collection-header
import Ember from 'ember';
import DefaultCollectionHeader from 'ember-cli-materialize/views/default-collection-header';
import layout from '../templates/snippets/my-custom-header';

export default DefaultCollectionHeader.extend({
  classNames: ['deep-purple'],
  layout: layout
});
// END-SNIPPET
