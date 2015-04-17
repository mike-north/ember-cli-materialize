import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-input', 'MaterializeInput', {
});

test('input renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});


test('input has class input-field', function(assert) {
  var component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('input has a label', function(assert) {
  var label = 'My Input';
  var component = this.subject({ label: label });
  this.render();
  assert.equal(component.$('>label').text(), label);
});

test('input has a value', function(assert) {
  var value = 'My Input Value';
  var component = this.subject({ value: value });
  this.render();
  assert.equal(component.$('>input').val(), value);
});

test('input label is active with value', function(assert) {
  var component = this.subject({ value: 'some text' });
  this.render();
  assert.ok(component.$('>label').hasClass('active'));
});

test('input has an icon', function(assert) {
  var icon = 'mdi-action-face-unlock';
  var component = this.subject({ icon: icon });
  this.render();
  assert.ok(component.$('>i').hasClass(icon));
});

test('input has type password', function(assert) {
  var type = 'password';
  var component = this.subject({ type: type });
  this.render();
  assert.equal(component.$('>input').attr('type'), type);
});
