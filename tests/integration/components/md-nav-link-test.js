import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-nav-link', 'Integration | Component | md nav link', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // Template block usage:
  this.render(hbs`
    {{#md-nav-link 'index'}}
      template block text
    {{/md-nav-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
