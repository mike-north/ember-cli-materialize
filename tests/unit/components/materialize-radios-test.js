import { A } from '@ember/array';
import hbs from 'htmlbars-inline-precompile';
import {
  moduleForComponent,
  test
}
from 'ember-qunit';

moduleForComponent('md-radios', {
  integration: true
});

test('simple array test, with initial selection', function(assert) {
  this.setProperties({
    content: A(['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan']),
    selection: 'Harry Morgan'
  });
  this.render(hbs `
    {{md-radios content=content selection=selection}}
  `);

  assert.deepEqual(this.$('label').toArray().map(x => $(x).text().trim()), ['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan'], 'Choices are valid');
  assert.equal(this.$('input[type="radio"]')[2].checked, true, 'Third radio is checked');
});

test('disabled test', function(assert) {
  this.setProperties({
    content: A(['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan']),
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
    selection: 'b'
  });

  this.render(hbs `
    {{md-radios content=content selection=selection}}
  `);

  assert.equal(this.$('input:checked').length, 1, 'One item should be selected');
  assert.equal(this.$('input:checked').attr('value'), 'b', 'Item b should be selected');

  this.$('input[value="a"]').click();
  assert.equal(this.$('input:checked').length, 1, 'One item should be selected');
  assert.equal(this.$('input:checked').attr('value'), 'a', 'Item a should be selected');

  this.$('input[value="b"]').click();
  assert.equal(this.$('input:checked').length, 1, 'One item should be selected');
  assert.equal(this.$('input:checked').attr('value'), 'b', 'Item b should be selected');

  this.$('input[value="b"]').click();
  assert.equal(this.$('input:checked').length, 1, 'One item should be selected');
  assert.equal(this.$('input:checked').attr('value'), 'b', 'Item b should be selected');

  this.$('input[value="c"]').click();
  assert.equal(this.$('input:checked').length, 1, 'One item should be selected');
  assert.equal(this.$('input:checked').attr('value'), 'c', 'Item c should be selected');

});
