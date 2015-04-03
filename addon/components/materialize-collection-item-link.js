import materializeCollectionItem from './materialize-collection-item';

export default materializeCollectionItem.extend({
  layoutName: 'components/materialize-collection-link',
  tagName: 'a',
  linkTo: '#',
  attributeBindings: ['linkTo:href'],
});
