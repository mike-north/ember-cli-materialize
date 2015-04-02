import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-select', {
  // specify the other units that are required for this test
});

test('select renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('select has class input-field', function(assert) {
  var component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('select has a label', function(assert) {
  var label = 'My Input';
  var component = this.subject({ label: label });
  this.render();
  assert.equal(component.$('>label').text(), label);
});

test('select label is active with value', function(assert) {
  var value = {id: 1, name: 'My Input Value'};
  var component = this.subject({
    content: [value],
    value: value,
    optionLabelPath: 'content.name',
    optionValuePath: 'content.id'
  });
  this.render();
  assert.ok(component.$('>label').hasClass('active'));
});
