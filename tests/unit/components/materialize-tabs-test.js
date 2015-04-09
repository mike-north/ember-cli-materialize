import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('materialize-tabs', {
  // Specify the other units that are required for this test
  needs: ['component:materialize-tabs-tab']
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

  Ember.run.next(function () {
    component.set('selected', 'b');
    Ember.run.next(function () {
      assert.equal(component.$('.active').text().trim(), 'Second', 'Second tab is now selected');
    });
  });
});

test('programatically adding tabs', function (assert) {

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

  assert.equal(Ember.$('.materialize-tabs-tab').length, 3, 'Three tabs initially');


  Ember.run.next(this, function () {

    component.get('content').addObject({id: 'd', title: 'Fourth'});
    Ember.run.schedule('afterRender', function () {
      assert.equal(Ember.$('.materialize-tabs-tab').length, 4, 'Four tabs now');
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
