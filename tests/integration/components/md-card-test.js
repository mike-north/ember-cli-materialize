import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-card', 'Integration | Component | md card', {
    integration: true
});

test('Basic card', function(assert) {

    // Template block usage:
    this.render(hbs `
    {{#md-card title="A basic card" as |c|}}
      {{#c.content}}
        <p>template block text</p>
      {{/c.content}}
    {{/md-card}}
  `);

    assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 'Abasiccardtemplateblocktext');
    assert.equal(this.$('.card-title').text(), 'A basic card');
    assert.equal(this.$('.card-content p').text(), 'template block text');
});


test('Basic card with actions', function(assert) {

    let done = assert.async();

    this.on('doSomething', function() {
        done();
    });

    this.render(hbs `
    {{#md-card title="A basic card" as |c|}}
      {{#c.content}}
        <p>template block text</p>
      {{/c.content}}
      {{#c.actions as |a|}}
        {{#a.btn on-click=(action 'doSomething')}}Click Me!{{/a.btn}}
      {{/c.actions}}
    {{/md-card}}
  `);

    assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 'AbasiccardtemplateblocktextClickMe!');
    assert.equal(this.$('.card-title').text(), 'A basic card');
    assert.equal(this.$('.card-content p').text(), 'template block text');
    assert.equal(this.$('.card-action').text().trim(), 'Click Me!');
    assert.equal(this.$().html().replace(/[\s\n]+/g, '').replace(/(id=\"ember[0-9]+\"|[\s\n]+)/g, ''),
        `<divclass=\"md-cardcardember-view\"><!----><divclass=\"md-card-contentcard-contentember-view\"><spanclass=\"card-title\">Abasiccard</span><p>templateblocktext</p></div><divclass=\"md-card-actionscard-actionember-view\"><buttonclass=\"md-btnbtn-flatwaves-effectwaves-lightember-view\"><!---->ClickMe!</button></div></div>`);
    $('.card-action button').click();
});

test('Basic card with no actions', function(assert) {

    this.render(hbs `
    {{#md-card title="A basic card" as |c|}}
      {{#c.content}}
        <p>template block text</p>
      {{/c.content}}
    {{/md-card}}
  `);

    assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 'Abasiccardtemplateblocktext');
    assert.equal(this.$('.card-title').text(), 'A basic card');
    assert.equal(this.$('.card-content p').text(), 'template block text');
    assert.equal(this.$().html().replace(/[\s\n]+/g, '').replace(/(id=\"ember[0-9]+\"|[\s\n]+)/g, ''),
        `<divclass=\"md-cardcardember-view\"><!----><divclass=\"md-card-contentcard-contentember-view\"><spanclass=\"card-title\">Abasiccard</span><p>templateblocktext</p></div></div>`);
    $('.card-action button').click();
});