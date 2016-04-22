// BEGIN-SNIPPET custom-collection-header
import DefaultCollectionHeader from 'ember-cli-materialize/components/md-default-collection-header';
import layout from '../templates/snippets/my-custom-header';

export default DefaultCollectionHeader.extend({
  layout,
  classNames: ['deep-purple']
});
// END-SNIPPET
