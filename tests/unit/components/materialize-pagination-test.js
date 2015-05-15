import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-pagination', {
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

test('window range calculation', function(assert) {
  assert.expect(3);

  // Creates the component instance
  var component = this.subject({
    min: 1,
    max: 12,
    current: 2,
    range: 5
  });
  assert.deepEqual(component.get('windowRange'), {low: 1, high: 5}, 'Off center window range calculates correctly');
  Ember.run(function () {

    component.setProperties({
      min: 1,
      max: 12,
      current: 7,
      range: 5
    });
    assert.deepEqual(component.get('windowRange'), {low: 5, high: 9}, 'Changes to current position updates window range');

    component.setProperties({
      min: 1,
      max: 12,
      current: 7,
      range: 7
    });
    assert.deepEqual(component.get('windowRange'), {low: 4, high: 10}, 'Changes to range width updates window range');

  });

});

test('increment button', function(assert) {
  assert.expect(5);

  // Creates the component instance
  var component = this.subject({
    min: 1,
    max: 12,
    current: 2,
    range: 5
  });
  this.render();
  Ember.run( function () {
    component.$('.increment').click();
    assert.equal(component.get('current'), 3, 'Increment button incremenets position');
    component.$('.decrement').click();
    component.$('.decrement').click();
    assert.equal(component.get('current'), 1, 'Decrement button incremenets position');
    assert.equal(component.$('li.disabled').length, 1, 'Decrement button disables at lower edge of range');
    component.set('current', 7);
    Ember.run.schedule('afterRender', function () {
      assert.equal(component.$('li.disabled').length, 0, 'No buttons disabled in middle of range');
      component.set('current', 12);
      Ember.run.schedule('afterRender', function () {
        assert.equal(component.$('li.disabled').length, 1, 'Increment button disables at upper edge of range');
      });
    });

  });

});

