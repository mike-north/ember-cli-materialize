import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { module, test } from 'qunit';

var App;

module('Acceptance - Navbar', {
  setup() {
    App = startApp();
  },
  teardown() {
    Ember.run(App, 'destroy');
  }
});

test('Load the demo page', assert => {
  visit('/navbar');

  andThen(() => {
    assert.ok(true, 'If this is passing, this page has no deprecation warnings');

    assert.equal(Ember.$('.navbar-example nav').length, 1, 'Navbar is in the DOM');
    assert.equal(Ember.$('.navbar-example nav .brand-logo').text(), "Example", "name is rendered in .brand-info");

  });
});

test('SideNav', assert => {
  visit('/navbar');

  window.QUnit.stop();

  andThen(() => {
    assert.equal(find('.navbar-example nav .button-collapse').length, 1, 'Navbar collapse button is in the DOM');
    click('.navbar-example nav .button-collapse');
  });

  andThen(() => {
    setTimeout(() => {
      assert.equal(Ember.$('.navbar-example .side-nav').css('left'), '0px', "SideNav is open");
      setTimeout(() => {
        Ember.$("#sidenav-overlay").click();
        setTimeout(() => {
          assert.equal(Ember.$('.navbar-example .side-nav').css('left'), '-250px');
          window.QUnit.start();
        }, 1000);
      }, 1000);
    }, 1000);

  });
});
