import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-input', {
  unit: true,
  needs: ['helper:bw-compat-icon', 'service:keyboard']
});

test('input renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  let component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('input has class input-field', function(assert) {
  let component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('input has a label', function(assert) {
  let label = 'My Input';
  let component = this.subject({ label });
  this.render();
  assert.equal(component.$('>label').text(), label);
});

test('input has a value', function(assert) {
  let value = 'My Input Value';
  let component = this.subject({ value });
  this.render();
  assert.equal(component.$('>input').val(), value);
});

test('input label is active with value', function(assert) {
  let component = this.subject({ value: 'some text' });
  this.render();
  assert.ok(component.$('>label').hasClass('active'));
});

test('input has an icon', function(assert) {
  let icon = 'mdi-action-face-unlock';
  let component = this.subject({ icon });
  this.render();
  assert.ok(component.$('>i').hasClass(icon));
});

test('input has type password', function(assert) {
  let type = 'password';
  let component = this.subject({ type });
  this.render();
  assert.equal(component.$('>input').attr('type'), type);
});
