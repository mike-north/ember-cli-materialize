import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-collection-linkitem', 'Integration | Component | md collection linkitem', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`
    {{#md-collection-linkitem 'index'}}
      template block text
    {{/md-collection-linkitem}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
