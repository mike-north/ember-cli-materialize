import { moduleForComponent, test } from 'ember-qunit';
import $ from 'jquery';

moduleForComponent('md-btn-dropdown', 'component:md-btn-dropdown', {
  unit: true,
  needs: ['helper:bw-compat-icon']
});

test('button dropdown renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  let component = this.subject();
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
  let component = this.subject();
  component.set('hover', false);
  this.render();

  let dropdownContentId = `#${component.get('_dropdownContentId')}`;
  let dropdownElement = $(dropdownContentId);
  assert.ok(!dropdownElement.is(':visible'));
  component.$().trigger('mouseenter');
  assert.ok(!dropdownElement.is(':visible'));
  component.$().click();
  assert.ok(dropdownElement.is(':visible'));
});

test('dropdown shown when hovered', function(assert) {
  let component = this.subject();
  component.set('hover', true);
  this.render();

  let dropdownContentId = `#${component.get('_dropdownContentId')}`;
  let dropdownElement = $(dropdownContentId);
  assert.ok(!dropdownElement.is(':visible'));
  component.$().trigger('mouseenter');
  assert.ok(dropdownElement.is(':visible'));
});
