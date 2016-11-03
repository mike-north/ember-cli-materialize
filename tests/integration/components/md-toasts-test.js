import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-toasts', 'Integration | Component | md toasts', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('flash', {
    timeout: 1000
  });
  this.set('flashMessages', {
    arrangedQueue: []
  });
  this.render(hbs`{{md-toasts content=flash flashMessages=flashMessages}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-toasts content=flash flashMessages=flashMessages}}
      template block text
    {{/md-toasts}}
  `);

  assert.equal(this.$().text().trim(), '');
});
