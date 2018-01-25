import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('md-input-field', {
  unit: true
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('input field renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('input field has class input-field', function(assert) {
  const component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('input field has class input-field', function(assert) {
  const component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('input field has a label', function(assert) {
  const label = 'My Input';
  const component = this.subject({ label });
  this.render();
  assert.equal(component.get('label'), label);
});

test('input field has a value', function(assert) {
  const value = 'My Input Value';
  const component = this.subject({ value });
  this.render();
  assert.equal(component.get('value'), value);
});

test('input field has an icon', function(assert) {
  const icon = 'mdi-action-face-unlock';
  const component = this.subject({ icon });
  this.render();
  assert.equal(component.get('icon'), icon);
});
