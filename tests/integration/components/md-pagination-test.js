import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-pagination', 'Integration | Component | md pagination', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-pagination}}`);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g,''), 'chevron_left1chevron_right');

  // Template block usage:
  this.render(hbs`
    {{#md-pagination}}
      template block text
    {{/md-pagination}}
  `);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g,''), 'chevron_left1chevron_right');
});
