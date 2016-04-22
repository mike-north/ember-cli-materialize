import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-btn-dropdown', 'component:md-btn-dropdown', {
  unit: true
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('button dropdown renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('button dropdown is added to the page', function(assert) {
  this.subject();
  this.render();

  assert.ok($('button').length);
});

test('dropdown shown when clicked', function(assert) {
  const component = this.subject();
  component.set('hover', false);
  this.render();

  const dropdownContentId = `#${component.get('_dropdownContentId')}`;
  const dropdownElement = $(dropdownContentId);
  assert.ok(!dropdownElement.is(':visible'));
  component.$().trigger('mouseenter');
  assert.ok(!dropdownElement.is(':visible'));
  component.$().click();
  assert.ok(dropdownElement.is(':visible'));
});

test('dropdown shown when hovered', function(assert) {
  const component = this.subject();
  component.set('hover', true);
  this.render();

  const dropdownContentId = `#${component.get('_dropdownContentId')}`;
  const dropdownElement = $(dropdownContentId);
  assert.ok(!dropdownElement.is(':visible'));
  component.$().trigger('mouseenter');
  assert.ok(dropdownElement.is(':visible'));
});

test('dropdown shown at origin', function(assert) {
  const component = this.subject();
  component.set('belowOrigin', false);
  this.render();

  const dropdownContentId = `#${component.get('_dropdownContentId')}`;
  const dropdownElement = $(dropdownContentId);
  assert.equal(dropdownElement.css('top'), 'auto', 'Initially auto');

  component.$().click();
  Ember.run(function() {
    Ember.run.schedule('afterRender', function() {
      // const dropdownPosString = dropdownElement.css('top');
      assert.ok(parseInt(component.$().position().top, 10) > 200);
    });
  });
});

test('dropdown shown below origin', function(assert) {
  const component = this.subject();
  component.set('belowOrigin', true);
  this.render();

  const dropdownContentId = `#${component.get('_dropdownContentId')}`;
  const dropdownElement = $(dropdownContentId);
  component.$().click();
  Ember.run(function() {
    Ember.run.schedule('afterRender', function() {
      assert.notEqual(`${component.$().position().top}px`, dropdownElement.css('top'));
    });
  });
});
