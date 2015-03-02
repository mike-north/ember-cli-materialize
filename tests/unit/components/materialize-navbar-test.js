import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-navbar', 'MaterializeNavbarComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it is added to the page', function(assert) {
  var component = this.subject();
  this.render();

  assert.ok($('nav').length);
});

test('name test', function(assert) {
  var component = this.subject();
  this.render();

  Ember.run(function(){
    component.set('name', 'Brand');
  });

  assert.equal($('a.brand-logo').html().trim(), 'Brand');
});
