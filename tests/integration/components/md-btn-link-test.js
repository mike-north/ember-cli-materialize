import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-btn-link', 'Integration | Component | md btn link', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`{{#md-btn-link 'index'}}My Link{{/md-btn-link}}`);
  assert.equal(this.$().text().trim(), 'My Link');

  this.render(hbs`{{md-btn-link 'My Thing' 'index'}}`);
  assert.equal(this.$().text().trim(), 'My Thing');
  assert.equal(this.$().html().replace(/(id=\"ember[0-9]+\"|[\s\n]+)/g, '').replace(/disabled=\"[a-zA-Z]*\"/g, ''),
    '<ahref=\"\"class=\"ember-viewmd-btn-linkbtnwaves-effectwaves-light\"><!----><!---->MyThing</a>');
});
