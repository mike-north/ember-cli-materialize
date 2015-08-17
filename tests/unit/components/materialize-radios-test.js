import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import {
  moduleForComponent,
  test
}
from 'ember-qunit';

moduleForComponent('md-radios', {
  integration: true
});

test('no parameters, no block', function(assert) {
  assert.expect(1);

  this.render(hbs `
    {{md-radios}}
  `);

  assert.equal(this.$('.md-radios').toArray().length, 1, 'component renders');
});


test('simple array test, with initial selection', function(assert) {
  this.setProperties({
    content: Ember.A(['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan']),
    selection: 'Harry Morgan'
  });
  this.render(hbs `
    {{md-radios content=content selection=selection}}
  `);

  assert.deepEqual(this.$('label').toArray().map(x => Ember.$(x).text().trim()), ['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan'], 'Choices are valid');
  assert.equal(this.$('input[type="radio"]')[2].checked, true, 'Third radio is checked');
});

test('disabled test', function(assert) {
  this.setProperties({
    content: Ember.A(['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan']),
    selection: 'Harry Morgan'
  });
  this.render(hbs `
    {{md-radios content=content selection=selection disabled=true}}
  `);
  assert.equal(this.$('input:disabled').length, 3, 'All three inputs disabled');
});

test('deselecting checkbox works with multiple=false', function(assert) {

  this.setProperties({
    content: ['a', 'b', 'c'],
    selection: 'b',
  });

  this.render(hbs `
      {{md-radios content=content selection=selection}}
    `);
  const viewRegistry = Ember.View.views || Ember.View.create().get('_viewRegistry');
  const component = viewRegistry[this.$('.md-radios')[0].id];

  Ember.run(function() {
    assert.equal(component.isValueSelected('a'), false, 'A should be un-checked');
    assert.equal(component.isValueSelected('b'), true, 'B should be checked');
    assert.equal(component.isValueSelected('c'), false, 'C should be un-checked');
    assert.equal(component.get('selection'), 'b', 'Selection should be B and only B');

    component.setValueSelection('b', false);
    assert.equal(component.isValueSelected('b'), false, 'B should be un-checked after unselection');
    assert.equal(component.get('selection'), null, 'Selection should be B and only B');
  });
});
