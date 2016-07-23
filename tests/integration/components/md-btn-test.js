import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-btn', 'Integration | Component | md btn', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-btn}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-btn}}
      template block text
    {{/md-btn}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders with a label', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('lbl', 'Hello');
  this.render(hbs`{{md-btn label=lbl}}`);
  assert.equal(this.$().text().trim(), 'Hello');
  this.set('lbl', 'Bye');
  assert.equal(this.$().text().trim(), 'Bye');
});

test('large and flat classes are applied appropriately', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.setProperties({
    isLarge: true,
    isFlat: false
  });
  this.render(hbs`{{md-btn label='Button' flat=isFlat large=isLarge}}`);
  assert.equal(this.$().text().trim(), 'Button');
  assert.equal(this.$('.md-btn').attr('class'), 'ember-view md-btn btn btn-large waves-effect waves-light');
  this.set('isLarge', false);
  assert.equal(this.$('.md-btn').attr('class'), 'ember-view md-btn btn waves-effect waves-light');
  this.set('isFlat', true);
  assert.equal(this.$('.md-btn').attr('class'), 'ember-view md-btn btn-flat waves-effect waves-light');
  this.set('isLarge', true);
  assert.equal(this.$('.md-btn').attr('class'), 'ember-view md-btn btn-flat btn-large waves-effect waves-light');
});

test('icon alignment', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('icon', 'person');
  this.render(hbs`{{md-btn label='Button' icon=icon}}`);
  assert.equal(this.$().text().trim().replace(/[\n\s]+/g, ''), 'personButton');
  assert.equal(this.$('.material-icons').hasClass('left'), true, 'By default, icon is left-aligned');

  this.render(hbs`{{md-btn label='Button' icon=icon iconClass='right'}}`);
  assert.equal(this.$('.material-icons').hasClass('right'), true, 'By default, icon is left-aligned');
});

test('disabled', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('isDisabled', false);
  this.render(hbs`{{md-btn label='Button' disabled=isDisabled}}`);
  assert.equal(this.$('.md-btn').hasClass('disabled'), false, 'If not disabled, no "disabled" styling');
  assert.equal(this.$('.md-btn').attr('disabled'), undefined, 'If not disabled, no "disabled" attribute');
  this.set('isDisabled', true);
  assert.equal(this.$('.md-btn').hasClass('disabled'), true, 'If disabled, "disabled" styling');
  assert.equal(this.$('.md-btn').attr('disabled'), "disabled", 'If disabled, "disabled" attribute');
});


test('on-click action', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  assert.expect(1);
  let done = assert.async();

  this.on('closureClick', function() {
    assert.ok(true, 'Closure action clicked');
    done();
  });
  this.render(hbs`{{md-btn label='Button' on-click=(action 'closureClick')}}`);
  this.$('.md-btn').click();
});

test('default action', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  assert.expect(1);
  let done = assert.async();

  this.on('defaultClick', function() {
    assert.ok(true, 'Default action clicked');
    done();
  });
  this.render(hbs`{{md-btn label='Button' action='defaultClick'}}`);
  this.$('.md-btn').click();
});


