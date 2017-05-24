import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

const { $ } = Ember;

moduleForAcceptance('Acceptance | navbar');

test('visiting /navbar', function(assert) {
  visit('/navbar');

  andThen(function() {
    assert.equal(currentURL(), '/navbar');
  });
});

test('Load the demo page', (assert) => {
  visit('/navbar');

  andThen(() => {
    assert.ok(true, 'If this is passing, this page has no deprecation warnings');

    assert.equal(find('.navbar-example nav').length, 1, 'Navbar is in the DOM');
    assert.equal(find('.navbar-example nav .brand-logo').text(), 'Example', 'name is rendered in .brand-info');

  });
});

test('SideNav', (assert) => {
  visit('/navbar');

  andThen(() => {
    assert.equal(find('.navbar-example nav .button-collapse').length, 1, 'Navbar collapse button is in the DOM');
  });

  click('.navbar-example nav .button-collapse');

  andThen(() => {
    let done = assert.async();
    setTimeout(() => {
      assert.ok(find('.navbar-example .side-nav').attr('style').indexOf('translateX(0px)') > 0, 'TranslateX is 0');
      assert.equal(find('.navbar-example .side-nav').css('left'), '0px', 'SideNav is open');
      setTimeout(() => {
        $('#sidenav-overlay').click();
        setTimeout(() => {
          assert.ok(find('.navbar-example .side-nav').attr('style').indexOf('translateX(-100%)') > 0, 'TranslateX > 0');
          done();
        }, 1200);
      }, 1200);
    }, 1200);
  });
});

test('Navbar Custom Home Route', (assert) => {
  visit('/navbar');

  click('.navbar-custom-home a.brand-logo');

  andThen(() => {
    assert.equal('/navbar', currentURL(), 'Navbar can have a custom home route');
  });
});

