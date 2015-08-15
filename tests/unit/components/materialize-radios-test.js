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


import {
  deselectForSingleSelectionTest,
} from '../../helpers/selectable-item-group';


moduleForComponent('md-radios', {
  unit: true,
  // Specify the other units that are required for this test
  needs: ['component:md-radio', 'component:radio-button']
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
    selection: 'Harry Morgan'
  });
  this.render();

  assert.deepEqual(component.$('label').toArray().map(x => Ember.$(x).text().trim()), ['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan'], 'Choices are valid');
  assert.equal(component.$('input[type="radio"]')[2].checked, true, 'Third radio is checked');
});


disabledGroupTest();
groupItemsRenderTest();
initialSelectionTest('bbb');

deselectForSingleSelectionTest();
