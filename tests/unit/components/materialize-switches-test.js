import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';


import {
  disabledGroupTest,
  groupItemsRenderTest,
  initialSelectionTest
} from '../../helpers/selectable-item';


moduleForComponent('md-switches', {
  unit: true
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('simple array test', function (assert) {
  var component = this.subject({
    content: Ember.A(['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan']),
    selection: Ember.A(['Deborah Morgan'])
  });
  this.render();
  assert.deepEqual(this.$('.switch-label').toArray().map(x => Ember.$(x).text()), ['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan'], 'Choices are valid');
  assert.equal(this.$('input[type="checkbox"]')[1].checked, true, 'Second checkbox is checked');
});

disabledGroupTest();
groupItemsRenderTest();
initialSelectionTest(Ember.A(['bbb', 'ccc']));
