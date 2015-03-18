import materializeButton from './materialize-button';

export default materializeButton.extend({
  layoutName: 'components/materialize-button',
  tagName: 'button',
  attributeBindings: ['type'],
  type: 'submit'
});
