import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('md-fixed-btns', 'component:md-fixed-btns', {
  // Specify the other units that are required for this test
  needs: ['component:md-btn', 'helper:bw-compat-icon']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('btnIcon attribute results in an icon being rendered', function(assert) {
  const component = this.subject({
    btnIcon: 'mdi-content-add'
  });

  this.render();
  assert.equal(component.$('i.mdi-content-add').length, 1, 'Icon should be present');
});

test('btnClass attribute should pass through to the button', function(assert) {
  const component = this.subject({
    btnClass: 'green'
  });

  this.render();
  assert.equal(component.$('.btn-floating.green').length, 1, 'Class should be appended to button');
});

test('btn-floating and btn-large classes are on the button by default', function(assert) {
  const component = this.subject();
  this.render();
  assert.equal(component.$('.btn-floating.btn-large').length, 1, 'Classes should be present');
});

test('Optionally, users can opt to use small floating buttons', function(assert) {
  const component = this.subject({
    large: false
  });
  this.render();
  assert.equal(component.$('.btn-floating').length, 1, 'Button should be in DOM');
  assert.equal(component.$('.btn-floating.btn-large').length, 0, 'Button should not be large');
});

test('there should be a UL tag to hold child buttons', function(assert) {
  const component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('fixed-action-btn'));
  assert.equal(component.$('ul').length, 1, 'ul should be present');
});
