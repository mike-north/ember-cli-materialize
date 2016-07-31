import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-input', {
  unit: true,
  needs: ['helper:bw-compat-icon']
});

test('input renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('input has class input-field', function(assert) {
  const component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('input has a label', function(assert) {
  const label = 'My Input';
  const component = this.subject({ label });
  this.render();
  assert.equal(component.$('>label').text(), label);
});

test('input has a value', function(assert) {
  const value = 'My Input Value';
  const component = this.subject({ value });
  this.render();
  assert.equal(component.$('>input').val(), value);
});

test('input label is active with value', function(assert) {
  const component = this.subject({ value: 'some text' });
  this.render();
  assert.ok(component.$('>label').hasClass('active'));
});

test('input has an icon', function(assert) {
  const icon = 'mdi-action-face-unlock';
  const component = this.subject({ icon });
  this.render();
  assert.ok(component.$('>i').hasClass(icon));
});

test('input has type password', function(assert) {
  const type = 'password';
  const component = this.subject({ type });
  this.render();
  assert.equal(component.$('>input').attr('type'), type);
});
