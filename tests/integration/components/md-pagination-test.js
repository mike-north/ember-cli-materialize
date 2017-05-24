import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-pagination', 'Integration | Component | md pagination', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.setProperties({
    min: 1,
    max: 12,
    current: 2,
    range: 5
  });

  this.render(hbs`{{md-pagination min=min max=max current=current range=range}}`);

  assert.equal(this.$().text().replace(/\s+/g, ''), 'chevron_left12345chevron_right');

  this.set('current', 7);
  assert.equal(this.$().text().replace(/\s+/g, ''), 'chevron_left56789chevron_right');
});

test('increment and decrement buttons', function(assert) {

  this.setProperties({
    min: 1,
    max: 12,
    current: 2,
    range: 5
  });

  this.render(hbs`{{md-pagination min=min max=max current=current range=range}}`);

  assert.equal(this.$().text().replace(/\s+/g, ''), 'chevron_left12345chevron_right');

  this.$('.increment').click();
  assert.equal(this.get('current'), 3, 'Clicking increment button increments current page');
  this.$('.decrement').click();
  assert.equal(this.get('current'), 2, 'Clicking decrement button decrements current page');
  this.$('.decrement').click();
  assert.equal(this.$('li.disabled').length, 1, 'Decrement button disables at lower edge of range');
  this.set('current', 12);
  assert.equal(this.$('li.disabled').length, 1, 'Increment button disables at upper edge of range');
});
