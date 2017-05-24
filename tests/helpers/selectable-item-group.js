import Ember from 'ember';

import {
  test
} from 'ember-qunit';

const { run } = Ember;

export function deselectForSingleSelectionTest() {
  test('deselecting checkbox works with multiple=false', function(assert) {
    assert.expect(6);

    let component = this.subject();
    component.set('content', ['a', 'b', 'c']);
    component.set('multiple', false);
    component.setValueSelection('b', true);
    this.render();

    run(function() {
      assert.equal(component.isValueSelected('a'), false, 'A should be un-checked');
      assert.equal(component.isValueSelected('b'), true, 'B should be checked');
      assert.equal(component.isValueSelected('c'), false, 'C should be un-checked');
      assert.equal(component.get('selection'), 'b', 'Selection should be B and only B');

      component.setValueSelection('b', false);
      assert.equal(component.isValueSelected('b'), false, 'B should be un-checked after unselection');
      assert.equal(component.get('selection'), null, 'Selection should be B and only B');
    });
  });

}
