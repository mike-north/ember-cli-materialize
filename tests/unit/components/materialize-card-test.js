import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-card', 'MaterializeCardComponent', {
  unit: true
});


test('card renders', function(assert) {
  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});


test('card is added to the page', function(assert) {
  this.subject();
  this.render();
  assert.ok($('div').length);
});


test('card a DIV', function(assert) {
  this.subject();
  assert.equal('DIV', this.$().prop('tagName'));
});


test('card has title properties', function(assert) {
  var component = this.subject({title: 'My Component', titleClass: 'green-text'});
  assert.equal('My Component', component.get('title'));
  assert.equal('green-text', component.get('titleClass'));
});

test('card has an image', function(assert) {
  var component = this.subject({image: 'images/ember.png'});
  assert.equal('images/ember.png', component.get('image'));
});

test('card has passed classes', function(assert) {
  this.subject({'classNames': "teal"});

  assert.ok(this.$().hasClass('card'));
  assert.ok(this.$().hasClass('teal'));
});
