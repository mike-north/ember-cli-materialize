import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

const { run } = Ember;

moduleForComponent('md-btn', {
  unit: true
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('button renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  let component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('button is added to the page', function(assert) {
  let component = this.subject();
  this.render();
  assert.ok(component.$().length);

  assert.ok(component.$().hasClass('waves-light'));
  assert.ok(component.$().hasClass('waves-effect'));
  assert.ok(component.$().hasClass('btn'));
});

test('button text test', function(assert) {
  let component = this.subject();
  this.render();
  run(function() {
    component.set('text', 'Button');
  });

  assert.equal(component.$().text().trim(), 'Button');
});

test('button icon test', function(assert) {
  let component = this.subject({
    iconPosition: 'left'
  });
  this.render();

  run(function() {
    component.set('icon', 'mdi-action-favorite');
  });

  assert.ok(this.$('i').length);
  assert.ok(this.$('i').hasClass('mdi-action-favorite'));
  assert.ok(this.$('i').hasClass('left'));
});

test('button icon with position test', function(assert) {
  let component = this.subject();
  this.render();

  run(function() {
    component.set('icon', 'mdi-action-favorite');
    component.set('iconPosition', 'right');
  });

  assert.ok(this.$('i').length);
  assert.ok(this.$('i').hasClass('mdi-action-favorite'));
  assert.ok(this.$('i').hasClass('right'));
});

test('button buttonType floating test', function(assert) {
  let component = this.subject();
  this.render();

  run(function() {
    component.set('buttonType', 'floating');
  });

  assert.ok(this.$().hasClass('waves-light'));
  assert.ok(this.$().hasClass('waves-effect'));
  assert.ok(this.$().hasClass('btn-floating'));
});

test('button buttonType flat test', function(assert) {
  let component = this.subject();
  this.render();

  run(function() {
    component.set('buttonType', 'flat');
  });

  assert.ok(this.$().hasClass('waves-effect'));
  assert.ok(this.$().hasClass('btn-flat'));
});

test('button buttonType large test', function(assert) {
  let component = this.subject();
  this.render();

  run(function() {
    component.set('buttonType', 'large');
  });

  assert.ok(this.$().hasClass('waves-light'));
  assert.ok(this.$().hasClass('waves-effect'));
  assert.ok(this.$().hasClass('btn-large'));
});

test('button isDisabled test', function(assert) {
  let component = this.subject();
  this.render();

  run(function() {
    component.set('isDisabled', 'true');
  });

  assert.ok(this.$().hasClass('waves-light'));
  assert.ok(this.$().hasClass('disabled'));
  assert.ok(this.$().hasClass('btn'));
});
