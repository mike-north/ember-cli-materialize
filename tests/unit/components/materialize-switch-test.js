import { run } from '@ember/runloop';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

import {
  selectTest,
  disabledStateTest,
  labelTest
} from '../../helpers/selectable-item';

moduleForComponent('md-switch', {
  unit: true
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  let component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('custom on/off labels', function(assert) {
  assert.expect(4);

  // Creates the component instance
  let component = this.subject();
  component.set('checked', false);

  // Renders the component to the page
  this.render();
  assert.equal(component.$('.offlabel').text(), 'Off', 'by default, off label is "Off"');
  assert.equal(component.$('.onlabel').text(), 'On', 'by default, off label is "On"');
  run(function() {
    component.setProperties({
      offLabel: 'disabled',
      onLabel: 'enabled'
    });
    run.schedule('afterRender', function() {
      assert.equal(component.$('.offlabel').text(), 'disabled', 'off label should be customized');
      assert.equal(component.$('.onlabel').text(), 'enabled', 'on label should be customized');
    });
  });
});

selectTest();
disabledStateTest();
labelTest();

