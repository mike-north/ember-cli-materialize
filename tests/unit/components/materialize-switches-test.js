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

const { A } = Ember;

moduleForComponent('md-switches', {
  unit: true,
  needs: ['component:md-switches-switch']
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

test('simple array test', function(assert) {
  const component = this.subject({
    content: A(['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan']),
    selection: A(['Deborah Morgan'])
  });
  this.render();
  assert.deepEqual(component.$('.switch-label').toArray().map((x) => $(x).text()), ['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan'], 'Choices are valid');
  assert.equal(component.$('input[type="checkbox"]')[1].checked, true, 'Second checkbox is checked');
});

disabledGroupTest();
groupItemsRenderTest();
initialSelectionTest(A(['bbb', 'ccc']));

deselectForSingleSelectionTest();
