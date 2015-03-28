import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-parallax', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('has class parallax-container', function(assert) {
  var component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('parallax-container'));
});

test('has div with class parallax', function(assert) {
  var component = this.subject();
  this.render();
  assert.ok(component.$('>div').hasClass('parallax'));
});

test('has an image', function(assert) {
  var component = this.subject();
  this.render();
  assert.ok(component.$('>div>img').length);
});
