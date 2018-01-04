import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('md-input-date', {
  unit: true,
  needs: ['helper:bw-compat-icon']
  // specify the other units that are required for this test
});

test('date input renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('date input has class input-field', function(assert) {
  const component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('date input has a label', function(assert) {
  const label = 'My Input';
  const component = this.subject({ label });
  this.render();
  assert.equal(component.$('>label').text(), label);
});

test('date input has a value', function(assert) {
  const value = '15 January, 1974';
  const component = this.subject({ value });
  this.render();
  assert.equal(component.$('>input').val(), value);
});

test('date input label is active with value', function(assert) {
  const component = this.subject({ value: '15 January, 1974' });
  this.render();
  assert.ok(component.$('>label').hasClass('active'));
});

test('date input has an icon', function(assert) {
  const icon = 'mdi-action-face-unlock';
  const component = this.subject({ icon });
  this.render();
  assert.ok(component.$('>i').hasClass(icon));
});
