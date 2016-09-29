import Ember from 'ember';

import {
  test
} from 'ember-qunit';

const { run, run: { schedule }, A, isArray } = Ember;

export function selectableItemHasRequiredParts() {
  test('has required DOM elements', function(assert) {
    assert.expect(3);

    let component = this.subject();
    this.render();

    assert.equal(component.$().hasClass('materialize-selectable-item'), true, 'has materialize-selectable-item class on top-level element');
    assert.equal(component.$('input.materialize-selectable-item-input').length > 0, true, 'has materialize-selectable-item-input on input');
    assert.equal(component.$('label.materialize-selectable-item-label').length > 0, true, 'has materialize-selectable-item-label on label');
  });
}

export function disabledStateTest() {

  test('disabled state', function(assert) {
    assert.expect(3);

    // Creates the component instance
    let component = this.subject();
    component.set('checked', false);
    // Renders the component to the page
    this.render();

    assert.ok(!component.$('input').attr('disabled'), 'by default, component is not disabled');
    run(function() {
      component.set('disabled', true);
      run.schedule('afterRender', function() {
        assert.ok(!!component.$('input').attr('disabled'), 'disabling the component disables its input');
        component.$('input').click();
        assert.equal(component.get('checked'), false, 'clicking on component does nothing while it is disabled');
      });
    });

  });
}

export function selectTest(params={}) {
  test('clicking changes its state', function(assert) {
    assert.expect(2);

    let component = this.subject(params);
    component.set('checked', false);
    this.render();

    assert.equal(component.get('checked'), false, 'Initially un-checked');

    component.$('input').click();
    assert.equal(component.get('checked'), true, 'After clicking, is checked');

  });

}

export function selectByLabelTest() {
  test('clicking on label changes its state', function(assert) {
    assert.expect(2);

    let component = this.subject();
    component.set('checked', false);

    this.render();
    assert.equal(component.get('checked'), false, 'Initially un-checked');
    component.$('label').click();
    assert.equal(component.get('checked'), true, 'After clicking, is checked');
  });

}

export function labelTest() {
  test('component label', function(assert) {
    assert.expect(2);

    let component = this.subject();
    component.set('name', 'Heisenberg');
    this.render();

    assert.equal(component.$().text().indexOf('Heisenberg') >= 0, true, 'Label is rendered');

    run(function() {
      component.set('name', 'Walter');
      schedule('afterRender', function() {
        assert.equal(component.$().text().indexOf('Walter') >= 0, true, 'Label is updated');
      });
    });
  });
}

export function groupItemsRenderTest() {
  test('items render', function(assert) {
    assert.expect(2);
    let choices = A(['aaa','bbb', 'ccc', 'ddd', 'eee']);
    // Creates the component instance
    let component = this.subject({
      content: choices,
      selection: null
    });

    // Renders the component to the page
    this.render();

    assert.equal(component.$('.materialize-selectable-item .materialize-selectable-item-label').length, choices.length, `${choices} items rendered`);
    assert.equal(component.$('.materialize-selectable-item .materialize-selectable-item-label').text().replace(/[\s\n]/g, ''), choices.join(''), 'All choice labels are present');
  });
}

export function initialSelectionTest(selection) {
  test('initial selection is correct', function(assert) {
    assert.expect(1);
    let choices = A(['aaa','bbb', 'ccc', 'ddd', 'eee']);
    // Creates the component instance
    let component = this.subject({
      content: choices,
      selection
    });

    // Renders the component to the page
    this.render();

    let shouldBeSelected = isArray(selection) ? selection : A([selection]);
    let actuallySelected = component.$('input:checked').map((idx, e) => {
      let parentElement = $(e).closest('.materialize-selectable-item');
      return parentElement.find('.materialize-selectable-item-label').text().trim();
    }).toArray();
    assert.equal(actuallySelected.join(''), shouldBeSelected.join(''), 'initial selection is correct');

  });
}

export function disabledGroupTest() {
  test('disabling group disables all inputs', function(assert) {
    let choices = A(['aaa','bbb', 'ccc', 'ddd', 'eee']);
    // Creates the component instance
    let component = this.subject({
      content: choices,
      selection: null
    });
    this.render();
    assert.equal(component.$('input:disabled').length, 0, 'No inputs are initially disabled');
    run(function() {
      component.set('disabled', true);
      run.schedule('afterRender', function() {
        assert.equal(component.$('input:disabled').length, 5, 'All inputs are disabled when group is disabled');
      });
    });
  });
}
