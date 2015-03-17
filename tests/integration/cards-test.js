import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { test } from 'ember-qunit';

var App;

module('Cards - Integration', {

  setup: function() {
    App = startApp();
  },

  teardown: function() {
    Ember.run(App, 'destroy');
  }

});



test('Basic Card should have a title', function(assert) {
  visit('/cards').then(function() {
    var titleEle = find('#basic-card > .card-content span');

    assert.ok(titleEle.hasClass('card-title'));
    assert.equal(titleEle.text().trim(), 'Card Title');
  });
});

test('Image Card should have a title', function(assert) {
  visit('/cards').then(function() {
    var titleEle = find('#image-card > .card-content span');

    assert.ok(titleEle.hasClass('card-title'));
    assert.equal(titleEle.text().trim(), 'Card Title');
  });
});

test('Card Reveal should have a title', function(assert) {
  visit('/cards').then(function() {
    var titleEle = find('#card-reveal > .card-content span');

    assert.ok(titleEle.hasClass('card-title'));
    assert.equal(titleEle.text().trim(), 'Card Title');
  });
});



test('Basic Card should have content', function(assert) {
  visit('/cards').then(function() {
    var contentEle = find('#basic-card > .card-content');

    assert.ok(contentEle.hasClass('card-content'));

    var expected = "I am a very simple card. I am good at containing small bits of information.\n" +
        "                            " +
        "I am convenient because I require little markup to use effectively.";

    // skip over the span containing the card title and get just the card content text.
    var actual = contentEle.find('>span').next().text().trim();

    assert.equal(actual, expected);

  });
});

test('Image Card should have content', function(assert) {
  visit('/cards').then(function() {
    var contentEle = find('#image-card > .card-content');

    assert.ok(contentEle.hasClass('card-content'));

    var expected = "I am a very simple card. I am good at containing small bits of information.\n" +
      "                            " +
      "I am convenient because I require little markup to use effectively.";

    // skip over the span containing the card title and get just the card content text.
    var actual = contentEle.find('>span').next().text().trim();

    assert.equal(actual, expected);

  });
});

test('Card Reveal should have content', function(assert) {
  visit('/cards').then(function() {
    var contentEle = find('#card-reveal > .card-content');

    assert.ok(contentEle.hasClass('card-content'));

    // skip over the span containing the card title and get just the card content text.
    var actual = contentEle.find('>span').next().text().trim();

    assert.equal(actual, "This is a Link");

  });
});


test('Card Reveal should have content', function(assert) {
  visit('/cards').then(function() {
    var contentEle = find('#card-panel > span');

    assert.ok(contentEle.hasClass('white-text'));

    var expected = "I am a very simple card.\n" +
      "                      I am good at containing small bits of information.\n" +
      "                      I am convenient because I require little markup to use effectively.\n" +
      "                      I am similar to what is called a panel in other frameworks.";

    // skip over the span containing the card title and get just the card content text.
    var actual = contentEle.text().trim();

    assert.equal(actual, expected);

  });
});


test('Basic Card should have actions', function(assert) {
  visit('/cards').then(function() {
    var actionEle = find('#basic-card > .card-action');

    assert.ok(actionEle.hasClass('card-action'));
  });
});

test('Image Card should have actions', function(assert) {
  visit('/cards').then(function() {
    var actionEle = find('#image-card > .card-action');

    assert.ok(actionEle.hasClass('card-action'));
  });
});


test('Card Reveal should reveal and conceal content', function(assert) {
  visit('/cards').then(function() {

    var activatorEle = find('#card-reveal > .card-content > .activator');
    var revealEle = find('#card-reveal > .card-reveal');

    var doneReveal = assert.async();
    var doneConceal = assert.async();

    // click to reveal
    click(activatorEle).then(function() {

        setTimeout(function () {
          assert.equal(revealEle.attr('style'), 'transform: translateY(-100%);');
          doneReveal();

          // click to conceal
          click(revealEle.find('> .card-title')).then(function () {
            setTimeout(function() {
              assert.equal(revealEle.attr('style'), 'transform: translateY(0px);');
              doneConceal();
            }, 1000);
          });

        }, 1000);

      });

  });
});
