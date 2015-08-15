import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-card-reveal', {
  unit: true
});

test('card reveal renders', function(assert) {
  // creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('card reveal it is added to the page', function(assert) {
  this.subject();
  this.render();
  assert.ok($('div').length);
});

test('card reveal is a DIV', function(assert) {
  this.subject();
  assert.equal('DIV', this.$().prop('tagName'));
});

test('card reveal has passed classes', function(assert) {
  this.subject({ classNames: 'teal' });

  assert.ok(this.$().hasClass('card-reveal'));
  assert.ok(this.$().hasClass('teal'));
});
