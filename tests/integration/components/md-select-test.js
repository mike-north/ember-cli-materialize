import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-select', 'Integration | Component | md select', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-select}}`);

  assert.equal(this.$().text().trim().replace(/[\n\s]+/g, ''), '▼');

  // Template block usage:
  this.render(hbs`
    {{#md-select}}
      template block text
    {{/md-select}}
  `);

  assert.equal(this.$().text().trim(), '▼');
});
