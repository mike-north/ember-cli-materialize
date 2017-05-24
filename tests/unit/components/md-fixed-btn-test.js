import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('md-fixed-btn', 'component:md-fixed-btn', {
  // Specify the other units that are required for this test
  needs: ['component:md-btn']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  let component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('btnIcon attribute results in an icon being rendered', function(assert) {
  let component = this.subject({
    btnIcon: 'mdi-content-add'
  });

  this.render();
  assert.equal(component.$('i.mdi-content-add').length, 1, 'Icon should be present');
});

test('btnClass attribute should pass through to the button', function(assert) {
  let component = this.subject({
    btnClass: 'green'
  });

  this.render();
  assert.equal(component.$('.btn-floating.green').length, 1, 'Class should be appended to button');
});

test('btn-floating and btn-large classes are on the button by default', function(assert) {
  let component = this.subject();
  this.render();
  assert.equal(component.$('.btn-floating.btn-large').length, 1, 'Classes should be present');
});

test('button should be wrapped in a li tag', function(assert) {
  let component = this.subject();
  this.render();
  assert.equal(component.$()[0].tagName, 'LI');
  assert.equal(component.$('.btn-floating').length, 1, 'Button should be wrapped in a li tag');
});

test('Optionally, users can opt to use small floating buttons', function(assert) {
  let component = this.subject({
    large: false
  });
  this.render();
  assert.equal(component.$('.btn-floating').length, 1, 'Button should be in DOM');
  assert.equal(component.$('.btn-floating.btn-large').length, 0, 'Button should not be large');
});
