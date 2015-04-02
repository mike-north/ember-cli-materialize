import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-date-input', {
  // specify the other units that are required for this test
});

test('date input renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});


test('date input has class input-field', function(assert) {
  var component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('date input has a label', function(assert) {
  var label = 'My Input';
  var component = this.subject({ label: label });
  this.render();
  assert.equal(component.$('>label').text(), label);
});

test('date input has a value', function(assert) {
  var value = '15 January, 1974';
  var component = this.subject({ value: value });
  this.render();
  assert.equal(component.$('>input').val(), value);
});

test('date input label is active with value', function(assert) {
  var component = this.subject({ value: '15 January, 1974' });
  this.render();
  assert.ok(component.$('>label').hasClass('active'));
});

test('date input has an icon', function(assert) {
  var icon = 'mdi-action-face-unlock';
  var component = this.subject({ icon: icon });
  this.render();
  assert.ok(component.$('>i').hasClass(icon));
});
