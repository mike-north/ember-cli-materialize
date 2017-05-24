import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-card-action', {
  unit: true
});

test('card action renders', function(assert) {
  // creates the component instance
  let component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('card action it is added to the page', function(assert) {
  this.subject();
  this.render();
  assert.ok(this.$().length);
});

test('card action is a DIV', function(assert) {
  this.subject();
  assert.equal('DIV', this.$().prop('tagName'));
});

test('card action has passed classes', function(assert) {
  this.subject({ classNames: 'teal' });

  assert.ok(this.$().hasClass('card-action'));
  assert.ok(this.$().hasClass('teal'));
});
