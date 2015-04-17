import materializeButton from './md-btn';

export default materializeButton.extend({
  layoutName: 'components/materialize-button',
  tagName: 'button',
  attributeBindings: ['type'],
  type: 'submit'
});
