import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import $ from 'jquery';

moduleForAcceptance('Acceptance - Modal');

test('Modal container is installed', assert => {
  visit('/modal');

  andThen(function() {
    assert.equal($('#materialize-modal-root-element').length, 1, 'Modal container is in body');
  });
});

test('Modal opens when button is clicked', assert => {
  visit('/modal');

  andThen(function() {
    assert.equal($('#materialize-modal-root-element .modal-content').length, 0, 'Modal is not on the screen');
  });

  click('.open-modal-button');

  andThen(function() {
    assert.equal($('#materialize-modal-root-element .modal-content').length, 1, 'Modal is on the screen');
  });
});

test('Modal is dismissed upon hitting "cancel"', assert => {
  visit('/modal');

  andThen(function() {
    assert.equal($('#materialize-modal-root-element .modal-content').length, 0, 'Modal is not on the screen');
  });

  click('.open-modal-button');

  andThen(function() {
    assert.equal($('#materialize-modal-root-element .modal-content').length, 1, 'Modal is on the screen');
  });

  click('#materialize-modal-root-element .modal-footer .cancel-button');

  andThen(function() {
    assert.equal($('#materialize-modal-root-element .modal-content').length, 0, 'Modal is on not the screen');
  });
});

test('Modal is dismissed by clicking on background', assert => {
  visit('/modal');

  andThen(function() {
    assert.equal($('.ember-modal-wrapper .modal-content').length, 0, 'Modal is not on the screen');
  });

  click('.test-modal-button');

  andThen(function() {
    assert.equal($('.ember-modal-wrapper .modal-content').length, 1, 'Modal is on the screen');
  });

  click('.ember-modal-wrapper');
});
