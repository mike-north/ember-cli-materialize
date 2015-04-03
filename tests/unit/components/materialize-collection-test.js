import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-collection', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
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
  assert.ok($('ul').length);
});

test('is a UL', function(assert) {
  this.subject();
  assert.equal('UL', this.$().prop('tagName'));
});


test('it is defined to contain a header', function(assert) {
  var component = this.subject({hasHeader: true});
  this.render();
  assert.ok(component.$().hasClass('with-header'));
});
