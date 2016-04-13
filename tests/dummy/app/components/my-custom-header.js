// BEGIN-SNIPPET custom-collection-header
import DefaultCollectionHeaderComponent from 'ember-cli-materialize/components/md-default-collection-header';
import layout from '../templates/snippets/my-custom-header';

export default DefaultCollectionHeaderComponent.extend({
  layout,
  classNames: ['deep-purple']
});
// END-SNIPPET
