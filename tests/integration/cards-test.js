import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { module, test } from 'qunit';

let App;

const { run } = Ember;

module('Acceptance - Cards', {
  setup() {
    App = startApp();
  },
  teardown() {
    run(App, 'destroy');
  }
});

function checkCardTitle(cardType, cardId) {
  test(`${cardType} should have a title`, function(assert) {
    visit('/cards');

    andThen(function() {
      const titleEle = find(`#${cardId} > .card-content span`);

      assert.ok(titleEle.hasClass('card-title'));
      assert.equal(titleEle.children().remove().end().text().trim(), 'Card Title');
    });
  });
}

function checkCardContent(cardType, cardId) {
  test(`${cardType} should have content`, function(assert) {
    visit('/cards');

    andThen(function() {
      const contentEle = find(`#${cardId} > .card-content`);

      assert.ok(contentEle.hasClass('card-content'));

      const expected = `I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.`;

      // skip over the span containing the card title and get just the card content text.
      const actual = contentEle.find('>span').next().text().trim().replace(/[\s\n]+/g, ' ');
      assert.equal(actual, expected);

    });
  });
}

function checkCardActions(cardType, cardId) {
  test(`${cardType} should have actions`, function(assert) {
    visit('/cards');

    andThen(function() {
      const actionEle = find(`#${cardId} > .card-action`);

      assert.ok(actionEle.hasClass('card-action'));
    });
  });
}

const cardFlavors = [
  { type: 'Basic Card',   id: 'basic-card' },
  { type: 'Image Card',   id: 'image-card' },
  { type: 'Card Reveal',  id: 'card-reveal' }
];

for (let i = 0; i < cardFlavors.length; i++) {
  checkCardTitle(cardFlavors[i].type, cardFlavors[i].id);
}
checkCardContent(cardFlavors[0].type, cardFlavors[0].id);
checkCardContent(cardFlavors[1].type, cardFlavors[1].id);
checkCardActions(cardFlavors[0].type, cardFlavors[0].id);
checkCardActions(cardFlavors[1].type, cardFlavors[1].id);

test('Card Reveal should have content', function(assert) {
  visit('/cards');

  andThen(function() {
    const contentEle = find('#card-reveal > .card-content');

    assert.ok(contentEle.hasClass('card-content'));

    // skip over the span containing the card title and get just the card content text.
    const actual = contentEle.find('>span').next().text().trim();

    assert.equal(actual, 'This is a Link');

  });
});

test('Card Reveal should have content', function(assert) {
  visit('/cards');

  andThen(function() {
    const contentEle = find('#card-panel > span');

    assert.ok(contentEle.hasClass('white-text'));

    const expected = 'I am a very simple card. I am good at containing small bits of information. ' +
      'I am convenient because I require little markup to use effectively. ' +
      'I am similar to what is called a panel in other frameworks.';

    // skip over the span containing the card title and get just the card content text.
    const actual = contentEle.text().trim().replace(/[\s\n]+/g, ' ');

    assert.equal(actual, expected);

  });
});

test('Card Reveal should reveal and conceal content', function(assert) {
  visit('/cards');

  andThen(function() {

    const doneReveal = assert.async();
    const doneConceal = assert.async();

    const activatorEle = find('#card-reveal>.card-content>.activator');
    const revealEle = find('#card-reveal>.card-reveal');
    const concealEle = revealEle.find('>.card-title');
    const animationClass = 'velocity-animating';

    // click to reveal
    click(activatorEle).then(function() {
      // should be animating...
      assert.ok(revealEle.hasClass(animationClass));

      // wait for animation to complete
      setTimeout(function() {
        assert.ok(!revealEle.hasClass(animationClass));
        doneReveal();

        // click to conceal
        click(concealEle).then(function() {
          assert.ok(revealEle.hasClass(animationClass));

          // wait for animation to complete
          setTimeout(function() {
            assert.ok(!revealEle.hasClass(animationClass));
            doneConceal();
          }, 500);
        });
      }, 500);
    });
  });
});
