import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-copyright', {
  unit: true
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('copyright renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('copyright binding to the text property works', function(assert) {
  assert.expect(2);

  const component = this.subject();
  const currentYear = new Date().getFullYear();

  this.render();
  assert.equal(component.$().text().trim(),
    `\u00A9 ${currentYear}`,
    'By default the text property is empty');

  Ember.run(function() {
    component.set('text', 'Copyright Text');
    Ember.run.schedule('afterRender', function() {
      assert.equal(component.$().text().trim(),
        `\u00A9 ${currentYear} Copyright Text`,
        'Setting the text property updates the content of the copyright component');
    });
  });
});

test('copyright null startYear', function(assert) {
  // get the component to test
  const component = this.subject();
  this.render();

  // confirm the component's date is 'currentYear'
  Ember.run(function() {
    Ember.run.schedule('afterRender', function() {
      assert.equal(component.get('date'),
        new Date().getFullYear(),
        'Not setting the startYear property just shows the currentYear');
    });
  });
});

test('copyright current startYear', function(assert) {
  // get the component to test
  // set the startYear equal to the currentYear
  const currentYear = new Date().getFullYear();
  const component = this.subject({ startYear: currentYear });
  this.render();

  // confirm the component's date is 'currentYear'
  Ember.run(function() {
    Ember.run.schedule('afterRender', function() {
      assert.equal(component.get('date'),
        currentYear,
        'Setting the startYear property to the same year as the currentYear just shows the currentYear');
    });
  });
});

test('copyright past startYear', function(assert) {
  // get the component to test
  // set the startYear a year less than the currentYear
  const currentYear = new Date().getFullYear();
  const component = this.subject({ startYear: currentYear - 1 });
  this.render();

  // confirm the component's date is 'startYear - currentYear'
  Ember.run(function() {
    Ember.run.schedule('afterRender', function() {
      assert.equal(component.get('date'),
        `${currentYear - 1} - ${currentYear}`,
        'Setting the startYear property to a year before the currentYear shows startYear - currentYear');
    });
  });
});

test('copyright future startYear', function(assert) {
  assert.throws(() => {
    this.subject({ startYear: new Date().getFullYear() + 1 });
    this.render();
  }, /Property startYear must be less than or equal to the current year/);
});
