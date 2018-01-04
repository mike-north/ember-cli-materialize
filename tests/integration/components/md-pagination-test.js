import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import $ from 'jquery';

moduleForComponent('md-pagination', 'Integration | Component | md pagination', {
  integration: true
});

test('Buttons render properly', function(assert) {
  this.render(hbs`
    {{md-pagination min=1 max=12 current=2 range=5}}
  `);
  let labels = $('.pagination li')
    .toArray()
    .map(x => x.innerText);
  assert.equal(labels.length, 7, '5 labels + 2 directional buttons');
  assert.deepEqual(labels, ['chevron_left', '1', '2', '3', '4', '5', 'chevron_right'], 'labels are correct');
});

test('decrement button disables at lower end of range', function(assert) {
  this.render(hbs`
    {{md-pagination min=1 max=12 current=1 range=5}}
  `);
  let labels = $('.pagination li.disabled a.decrement')
    .toArray()
    .map(x => x.innerText);
  assert.equal(labels.length, 1, 'left button is disabled at lower-end of range');
});


test('increment button disables at lower end of range', function(assert) {
  this.render(hbs`
    {{md-pagination min=1 max=12 current=12 range=5}}
  `);
  let labels = $('.pagination li.disabled a.increment')
    .toArray()
    .map(x => x.innerText);
  assert.equal(labels.length, 1, 'right button is disabled at upper-end of range');
});
