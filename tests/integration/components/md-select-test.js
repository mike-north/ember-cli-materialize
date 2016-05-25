import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-select', 'Integration | Component | md select', {
  integration: true
});

test('basic usage', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('frameworks', new Ember.A([
      { id: 1, value: 'Materialize CSS' },
      { id: 2, value: 'Ember-CLI Materialize' }
  ]));
  // Template block usage:
  this.render(hbs`
    {{md-select content=frameworks
      value=framework
      label="Framework"
      prompt="Please choose..."
      optionLabelPath="content.value"
      optionValuePath="content" class="col s12"}}
  `);
  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), `Framework▼Pleasechoose...MaterializeCSSEmber-CLIMaterializePleasechoose...MaterializeCSSEmber-CLIMaterialize`);

  assert.ok(this.$('.md-select').hasClass('input-field'));

  assert.equal(this.$('.md-select >label').text(), 'Framework');
});

test('simple array usage', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('content', new Ember.A(['Walter White', 'Jesee Pinkman', 'Gus Freng']));
  // Template block usage:
  this.render(hbs`
    {{md-select
      content=content
      value="Jesee Pinkman"}}
  `);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), '▼WalterWhiteJeseePinkmanGusFrengWalterWhiteJeseePinkmanGusFreng');
  assert.equal(this.$('.md-select input').val(), 'Jesee Pinkman', 'Jesee Pinkman is initially selected');

});
