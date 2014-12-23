import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-button', 'MaterializeButtonComponent', {
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

  ok($('a').length);

  ok($('a').hasClass('waves-light'));
  ok($('a').hasClass('waves-effect'));
  ok($('a').hasClass('btn'));
});

test('text test', function() {
  var component = this.subject();

  Ember.run(function(){
    component.set('text', 'Button');
  });

  equal(this.$().html().trim(), 'Button');
});

test('icon test', function() {
  var component = this.subject();
  this.append();

  Ember.run(function(){
    component.set('icon', 'mdi-action-favorite');
  });

  ok($('i').length);
  ok($('i').hasClass('mdi-action-favorite'));
  ok($('i').hasClass('left'));
});

test('icon with position test', function() {
  var component = this.subject();
  this.append();

  Ember.run(function(){
    component.set('icon', 'mdi-action-favorite');
    component.set('iconPosition', 'right');
  });

  ok($('i').length);
  ok($('i').hasClass('mdi-action-favorite'));
  ok($('i').hasClass('right'));
});

test('buttonType floating test', function() {
  var component = this.subject();
  this.append();

  Ember.run(function(){
    component.set('buttonType', 'floating');
  });

  ok($('a').hasClass('waves-light'));
  ok($('a').hasClass('waves-effect'));
  ok($('a').hasClass('btn-floating'));
});

test('buttonType flat test', function() {
  var component = this.subject();
  this.append();

  Ember.run(function(){
    component.set('buttonType', 'flat');
  });

  ok($('a').hasClass('waves-effect'));
  ok($('a').hasClass('btn-flat'));
});

test('buttonType large test', function() {
  var component = this.subject();
  this.append();

  Ember.run(function(){
    component.set('buttonType', 'large');
  });

  ok($('a').hasClass('waves-light'));
  ok($('a').hasClass('waves-effect'));
  ok($('a').hasClass('btn-large'));
});

test('isDisabled test', function() {
  var component = this.subject();
  this.append();
  
  Ember.run(function(){
    component.set('isDisabled', 'true');
  });

  ok($('a').hasClass('waves-light'));
  ok($('a').hasClass('disabled'));
  ok($('a').hasClass('btn'));
});
