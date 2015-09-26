import MaterializeButton from './md-btn';

export default MaterializeButton.extend({
  layoutName: 'components/materialize-button',
  tagName: 'button',
  attributeBindings: ['type'],
  type: 'submit'
});
