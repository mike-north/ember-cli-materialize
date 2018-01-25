import { moduleForComponent, test } from 'ember-qunit';
import $ from 'jquery';

moduleForComponent('md-btn-submit', 'component:md-btn-submit', {
  unit: true,
  needs: ['helper:bw-compat-icon']
});

test('button submit renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('button submit is added to the page', function(assert) {
  this.subject();
  this.render();

  assert.ok($('button').length);
});
