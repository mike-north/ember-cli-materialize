import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-card-panel', 'MaterializeCardPanelComponent', {
  unit: true
});


test('card panel renders', function(assert) {
  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});


test('card panel it is added to the page', function(assert) {
  this.subject();
  this.render();
  assert.ok($('div').length);
});


test('card panel is a DIV', function(assert) {
  this.subject();
  assert.equal('DIV', this.$().prop('tagName'));
});


test('card panel has passed classes', function(assert) {
  this.subject({'classNames': "teal"});

  assert.ok(this.$().hasClass('card-panel'));
  assert.ok(this.$().hasClass('teal'));
});
