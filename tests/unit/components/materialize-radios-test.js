import {
  moduleForComponent,
  test
} from 'ember-qunit';


import {
  disabledGroupTest,
  groupItemsRenderTest,
  initialSelectionTest
} from '../../helpers/selectable-item';


moduleForComponent('md-radios', {
  // Specify the other units that are required for this test
  needs: ['component:md-radio', 'component:radio-button']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

disabledGroupTest();
groupItemsRenderTest();
initialSelectionTest('bbb');
