import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-collection-item-link', {
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

test('it is added to the page', function(assert) {
  this.subject();
  this.render();
  assert.ok($('a').length);
});

test('is a A', function(assert) {
  this.subject();
  assert.equal('A', this.$().prop('tagName'));
});
