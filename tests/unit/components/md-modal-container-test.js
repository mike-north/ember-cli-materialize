import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-modal-container', {
  unit: true
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


test('it has the expected ID for md-modal to render into it', function(assert) {
  assert.expect(1);

  // Creates the component instance
  var component = this.subject({
    modalContainerId: 'materialize-modal-root-element'
  });
  // Renders the component to the page
  this.render();
  assert.equal(component.$('#materialize-modal-root-element').length, 1, '#materialize-modal-root-element should be in the DOM');
});
