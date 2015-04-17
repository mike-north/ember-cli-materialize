import {
  moduleForComponent,
  test
} from 'ember-qunit';

import {
  disabledStateTest,
  labelTest
} from '../../helpers/selectable-item';


moduleForComponent('md-range', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
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

disabledStateTest();
labelTest();
