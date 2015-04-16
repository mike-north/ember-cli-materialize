import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

import {
  disabledStateTest,
  selectTest,
  labelTest
} from '../../helpers/selectable-item';

moduleForComponent('materialize-checkbox', {
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

selectTest();
disabledStateTest();
labelTest();
