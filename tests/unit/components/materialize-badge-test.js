import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-badge', 'MaterializeBadgeComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.qual(component._state, 'preRender');

  // appends the component to the page
  this.append();
  assert.equal(component._state, 'inDOM');
});
