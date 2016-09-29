import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { module, test } from 'qunit';

let App;

const { run } = Ember;

module('Acceptance - Navbar', {
  setup() {
    App = startApp();
  },
  teardown() {
    run(App, 'destroy');
  }
});

test('Load the demo page', assert => {
  visit('/navbar');

  andThen(() => {
    assert.ok(true, 'If this is passing, this page has no deprecation warnings');

    assert.equal($('.navbar-example nav').length, 1, 'Navbar is in the DOM');
    assert.equal($('.navbar-example nav .brand-logo').text(), 'Example', 'name is rendered in .brand-info');

  });
});

test('SideNav', assert => {
  visit('/navbar');

  let done = assert.async();

  andThen(() => {
    assert.equal(find('.navbar-example nav .button-collapse').length, 1, 'Navbar collapse button is in the DOM');
    click('.navbar-example nav .button-collapse');
  });

  andThen(() => {
    setTimeout(() => {
      assert.ok($('.navbar-example .side-nav').attr('style').indexOf('translateX(0px)') > 0, 'TranslateX is 0');
      assert.equal($('.navbar-example .side-nav').css('left'), '0px', 'SideNav is open');
      setTimeout(() => {
        $('#sidenav-overlay').click();
        setTimeout(() => {
          assert.ok($('.navbar-example .side-nav').attr('style').indexOf('translateX(-100%)') > 0, 'TranslateX > 0');
          done();
        }, 1200);
      }, 1200);
    }, 1200);
  });
});

test('Navbar Custom Home Route', assert => {
  visit('/navbar');

  window.QUnit.stop();

  andThen(() => {
    click('.navbar-custom-home a.brand-logo');
  });

  andThen(() => {
    assert.equal('/navbar', currentURL(), 'Navbar can have a custom home route');

    window.QUnit.start();
  });
});

