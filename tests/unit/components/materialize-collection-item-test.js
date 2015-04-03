import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-collection-item', {
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
  assert.ok($('li').length);
});

test('is a LI', function(assert) {
  this.subject();
  assert.equal('LI', this.$().prop('tagName'));
});

test('it is set as active', function(assert) {
  var component = this.subject({isActive: true});
  this.render();
  assert.ok(component.$().hasClass('active'));
});

test('it is set as header', function(assert) {
  var component = this.subject({isHeader: true});
  this.render();
  assert.ok(component.$().hasClass('collection-header'));
});
