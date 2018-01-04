import { run } from '@ember/runloop';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-badge', {
  unit: true
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('badge renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  let component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('badge binding to the text property works', function(assert) {
  assert.expect(2);

  let component = this.subject();

  this.render();
  assert.equal(component.$().text().trim(), '', 'By default the text property is empty');

  run(function() {
    component.set('text', 'Heisenberg');
    run.schedule('afterRender', function() {
      assert.equal(component.$().text().trim(), 'Heisenberg', 'Setting the text property updates the content of the badge');
    });
  });
});
