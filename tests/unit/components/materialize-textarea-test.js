import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-textarea', {
  unit: true
  // specify the other units that are required for this test
});

test('textarea renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('textarea has class input-field', function(assert) {
  var component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('textarea has a label', function(assert) {
  var label = 'My Input';
  var component = this.subject({ label: label });
  this.render();
  assert.equal(component.$('>label').text(), label);
});

test('textarea has a value', function(assert) {
  var value = 'My Input Value';
  var component = this.subject({ value: value });
  this.render();
  assert.equal(component.get('value'), value);
});

test('textarea label is active with value', function(assert) {
  var component = this.subject({ value: 'some text' });
  this.render();
  assert.ok(component.$('>label').hasClass('active'));
});

test('textarea has an icon', function(assert) {
  var icon = 'mdi-action-face-unlock';
  var component = this.subject({ icon: icon });
  this.render();
  assert.ok(component.$('>i').hasClass(icon));
});

