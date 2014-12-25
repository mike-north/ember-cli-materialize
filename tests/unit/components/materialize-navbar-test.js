import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-navbar', 'MaterializeNavbarComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('it is added to the page', function() {
  var component = this.subject();
  this.append();

  ok($('nav').length);
});

test('name test', function() {
  var component = this.subject();
  this.append();

  Ember.run(function(){
    component.set('name', 'Brand');
  });

  equal($('a.brand-logo').html().trim(), 'Brand');
});
