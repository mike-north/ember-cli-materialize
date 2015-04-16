import Ember from 'ember';

import {
  test
} from 'ember-qunit';

export function disabledStateTest () {

  test('disabled state', function(assert) {
    assert.expect(3);

    // Creates the component instance
    var component = this.subject();
    component.set('checked', false);
    // Renders the component to the page
    this.render();

    assert.ok(!component.$('input').attr('disabled'), 'by default, component is not disabled');
    Ember.run(function () {
      component.set('disabled', true);
      Ember.run.schedule('afterRender', function () {
        assert.ok(!!component.$('input').attr('disabled'), 'disabling the component disables its input');
        component.$('input').click();
        assert.equal(component.get('checked'), false, 'clicking on component does nothing while it is disabled');
      });
    });

  });
}

export function selectTest() {
  test('clicking changes its state', function(assert) {
    assert.expect(2);

    var component = this.subject();
    component.set('checked', false);

    this.render();
    assert.equal(component.get('checked'), false, 'Initially un-checked');

    component.$('input').click();
    assert.equal(component.get('checked'), true, 'After clicking, is checked');
  });

}

export function labelTest() {
  test('component label', function(assert) {
    assert.expect(2);

    var component = this.subject();
    component.set('name', 'Heisenberg');
    this.render();

    assert.equal(component.$().text().indexOf('Heisenberg') >= 0, true, 'Label is rendered');

    Ember.run(function () {
      component.set('name', 'Walter');
      Ember.run.schedule('afterRender', function () {
        assert.equal(component.$().text().indexOf('Walter') >= 0, true, 'Label is updated');
      });
    });
  });
}

export function groupItemsRenderTest() {
  test('items render', function(assert) {
    assert.expect(2);
    var choices = Ember.A(['aaa','bbb', 'ccc', 'ddd', 'eee']);
    // Creates the component instance
    var component = this.subject({
      content: choices,
      selection: null
    });


    // Renders the component to the page
    this.render();

    assert.equal(component.$('.materialize-selectable-item .materialize-selectable-item-label').length, choices.length, `${choices} items rendered`);
    assert.equal(component.$('.materialize-selectable-item .materialize-selectable-item-label').text().replace(/[\s\n]/g,''), choices.join(''), 'All choice labels are present');
  });
}

export function initialSelectionTest(selection) {
  test('initial selection is correct', function(assert) {
    assert.expect(1);
    var choices = Ember.A(['aaa','bbb', 'ccc', 'ddd', 'eee']);
    // Creates the component instance
    var component = this.subject({
      content: choices,
      selection: selection
    });

    // Renders the component to the page
    this.render();


    var shouldBeSelected = Ember.isArray(selection) ? selection : Ember.A([selection]);
    var actuallySelected = component.$('input:checked').map(function (idx,e) {
      var parentElement = Ember.$(e).closest('.materialize-selectable-item');
      return parentElement.find('.materialize-selectable-item-label').text().trim();
    }).toArray();
    assert.equal(shouldBeSelected.join(''), actuallySelected.join(''), 'initial selection is correct');

  });
}

export function disabledGroupTest() {
  test('disabling group disables all inputs', function(assert) {
    var choices = Ember.A(['aaa','bbb', 'ccc', 'ddd', 'eee']);
    // Creates the component instance
    var component = this.subject({
      content: choices,
      selection: null
    });
    this.render();
    assert.equal(component.$('input:disabled').length, 0, 'No inputs are initially disabled');
    Ember.run(function () {
      component.set('disabled', true);
      Ember.run.schedule('afterRender', function () {
        assert.equal(component.$('input:disabled').length, 5, 'All inputs are disabled when group is disabled');
      });
    });
  });
}
