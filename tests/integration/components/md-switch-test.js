import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-switch', 'Integration | Component | md switch', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-switch}}`);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 'OffOn');

});
