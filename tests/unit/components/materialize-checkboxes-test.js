import { A } from '@ember/array';
import $ from 'jquery';
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

moduleForComponent('md-checks', {
  unit: true,
  needs: ['component:md-checks-check']
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

test('simple array test', function(assert) {
  let component = this.subject({
    content: A(['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan']),
    selection: A(['Harry Morgan'])
  });
  this.render();
  assert.deepEqual(component.$('label').toArray().map((x) => $(x).text()), ['Dexter Morgan', 'Deborah Morgan', 'Harry Morgan'], 'Choices are valid');
  assert.equal(component.$('input[type="checkbox"]')[2].checked, true, 'Third checkbox is checked');
});

disabledGroupTest();
groupItemsRenderTest();
initialSelectionTest(A(['bbb', 'ccc']));

deselectForSingleSelectionTest();
