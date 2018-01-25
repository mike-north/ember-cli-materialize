import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('md-parallax', {
  unit: true
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('parallax renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('parallax has class parallax-container', function(assert) {
  const component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('parallax-container'));
});

test('parallax has div with class parallax', function(assert) {
  const component = this.subject();
  this.render();
  assert.ok(component.$('>div').hasClass('parallax'));
});

test('parallax has an image', function(assert) {
  const component = this.subject();
  this.render();
  assert.ok(component.$('>div>img').length);
});
