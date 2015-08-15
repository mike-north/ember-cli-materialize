import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-select', {
  unit: true
  // specify the other units that are required for this test
});

test('select renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('select has class input-field', function(assert) {
  const component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('select has a label', function(assert) {
  const label = 'My Input';
  const component = this.subject({ label });
  this.render();
  assert.equal(component.$('>label').text(), label);
});

test('select label is active with value', function(assert) {
  const value = { id: 1, name: 'My Input Value' };
  const component = this.subject({
    content: new Ember.A([value]),
    value,
    optionLabelPath: 'content.name',
    optionValuePath: 'content.id'
  });
  this.render();
  assert.ok(component.$('>label').hasClass('active'));
});

test('select creates the correct choices from a simple content array', function(assert) {

  const component = this.subject({
    content: new Ember.A(['Walter White', 'Jesee Pinkman', 'Gus Freng']),
    value: 'Jesee Pinkman'
  });
  this.render();
  assert.equal(component.$('input').val(), 'Jesee Pinkman', 'Initially selected value is correct');

  assert.deepEqual(
    this.$('.dropdown-content li span').toArray().map(x => x.innerText),
    ['Walter White', 'Jesee Pinkman', 'Gus Freng'],
    'Choices are valid'
  );

});
