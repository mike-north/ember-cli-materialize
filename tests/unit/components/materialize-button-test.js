import MdSettings from 'ember-cli-materialize/services/md-settings';
import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-btn', {
  unit: true
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('button renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('button is added to the page', function(assert) {
  var component = this.subject();
  this.render();

  assert.ok($('a').length);

  assert.ok($('a').hasClass('waves-light'));
  assert.ok($('a').hasClass('waves-effect'));
  assert.ok($('a').hasClass('btn'));
});

test('button text test', function(assert) {
  var component = this.subject();

  Ember.run(function(){
    component.set('text', 'Button');
  });

  assert.equal(this.$().text().trim(), 'Button');
});

test('button icon test', function(assert) {
  var component = this.subject({
    iconPosition: 'left'
  });
  this.render();

  Ember.run(function(){
    component.set('icon', 'mdi-action-favorite');
  });

  assert.ok($('i').length);
  assert.ok($('i').hasClass('mdi-action-favorite'));
  assert.ok($('i').hasClass('left'));
});

test('button icon with position test', function(assert) {
  var component = this.subject();
  this.render();

  Ember.run(function(){
    component.set('icon', 'mdi-action-favorite');
    component.set('iconPosition', 'right');
  });

  assert.ok($('i').length);
  assert.ok($('i').hasClass('mdi-action-favorite'));
  assert.ok($('i').hasClass('right'));
});

test('button buttonType floating test', function(assert) {
  var component = this.subject();
  this.render();

  Ember.run(function(){
    component.set('buttonType', 'floating');
  });

  assert.ok($('a').hasClass('waves-light'));
  assert.ok($('a').hasClass('waves-effect'));
  assert.ok($('a').hasClass('btn-floating'));
});

test('button buttonType flat test', function(assert) {
  var component = this.subject();
  this.render();

  Ember.run(function(){
    component.set('buttonType', 'flat');
  });

  assert.ok($('a').hasClass('waves-effect'));
  assert.ok($('a').hasClass('btn-flat'));
});

test('button buttonType large test', function(assert) {
  var component = this.subject();
  this.render();

  Ember.run(function(){
    component.set('buttonType', 'large');
  });

  assert.ok($('a').hasClass('waves-light'));
  assert.ok($('a').hasClass('waves-effect'));
  assert.ok($('a').hasClass('btn-large'));
});

test('button isDisabled test', function(assert) {
  var component = this.subject();
  this.render();

  Ember.run(function(){
    component.set('isDisabled', 'true');
  });

  assert.ok($('a').hasClass('waves-light'));
  assert.ok($('a').hasClass('disabled'));
  assert.ok($('a').hasClass('btn'));
});
