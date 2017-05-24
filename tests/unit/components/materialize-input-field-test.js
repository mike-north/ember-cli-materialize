import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-input-field', {
  unit: true
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('input field renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  let component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('input field has class input-field', function(assert) {
  let component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('input field has class input-field', function(assert) {
  let component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('input field has a label', function(assert) {
  let label = 'My Input';
  let component = this.subject({ label });
  this.render();
  assert.equal(component.get('label'), label);
});

test('input field has a value', function(assert) {
  let value = 'My Input Value';
  let component = this.subject({ value });
  this.render();
  assert.equal(component.get('value'), value);
});

test('input field has an icon', function(assert) {
  let icon = 'mdi-action-face-unlock';
  let component = this.subject({ icon });
  this.render();
  assert.equal(component.get('icon'), icon);
});

