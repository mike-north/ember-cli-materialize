import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-input-field', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('input field renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('input field has class input-field', function(assert) {
  var component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});


test('input field has class input-field', function(assert) {
  var component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('input field has a label', function(assert) {
  var label = 'My Input';
  var component = this.subject({ label: label });
  this.render();
  assert.equal(component.get('label'), label);
});

test('input field has a value', function(assert) {
  var value = 'My Input Value';
  var component = this.subject({ value: value });
  this.render();
  assert.equal(component.get('value'), value);
});

test('input field has an icon', function(assert) {
  var icon = 'mdi-action-face-unlock';
  var component = this.subject({ icon: icon });
  this.render();
  assert.equal(component.get('icon'), icon);
});

