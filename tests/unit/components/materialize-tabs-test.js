import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-tabs', {
  unit: true,
  // Specify the other units that are required for this test
  needs: ['component:md-tab']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();

  component.setProperties({
    content: new Ember.A([
      {id: 'a', title: 'First'},
      {id: 'b', title: 'Second'},
      {id: 'c', title: 'Third'}
    ]),
    selected: 'a'
  });

  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('programatically setting selected tab', function (assert) {

  assert.expect(2);

  // Creates the component instance
  var component = this.subject();

  component.setProperties({
    content: new Ember.A([
      {id: 'a', title: 'First'},
      {id: 'b', title: 'Second'},
      {id: 'c', title: 'Third'}
    ]),
    selected: 'a'
  });
  this.render();
  assert.equal(component.$('.active').text().trim(), 'First', 'First tab is initially selected');

  Ember.run(function () {
    component.set('selected', 'b');
    Ember.run.schedule('afterRender', function () {
      assert.equal(component.$('.active').text().trim(), 'Second', 'Second tab is now selected');
    });
  });
});

test('No initial selection - first tab should be selected', function (assert) {

  assert.expect(1);

  // Creates the component instance
  var component = this.subject();

  component.setProperties({
    content: new Ember.A([
      {id: 'a', title: 'First'},
      {id: 'b', title: 'Second'},
      {id: 'c', title: 'Third'}
    ])
  });
  this.render();
  assert.equal(component.$('.active').text().trim(), 'First', 'First tab is initially selected');
});


test('Empty content - should render an empty UL', function (assert) {

  assert.expect(1);

  // Creates the component instance
  var component = this.subject();

  component.setProperties({
    content: new Ember.A([])
  });
  this.render();
  assert.equal(component.$('.materialize-tabs-tab').length, 0, 'No tabs should be rendered');
});


test('Col width - should result in the correct CSS classes', function (assert) {

  assert.expect(3);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component.get('colWidth'), 2, 'Default col width is 2');
  component.setProperties({
    colWidth: 4,
    content: new Ember.A([
      {id: 'a', title: 'First'},
      {id: 'b', title: 'Second'},
      {id: 'c', title: 'Third'}
    ])
  });
  this.render();
  assert.equal(component.get('composableChildren')[0].get('colWidth'), 4, 'Col width on tab set applies to tabs');
  assert.equal(component.get('composableChildren')[0].get('_colClass'), 's4', 'tab col class is correct');
});
