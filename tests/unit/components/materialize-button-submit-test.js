import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-button-submit', 'MaterializeButtonSubmitComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  needs: ['template:components/materialize-button']
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

  ok($('button').length);
});
