import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-input', 'Integration | Component | md input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-input}}`);

  assert.equal(this.$().text().trim(), '');
});

test('label is rendered as expected', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // let done = assert.async();

  this.render(hbs`{{md-input label='First Name'}}`);

  assert.equal(this.$().text().trim(), 'First Name');
  assert.equal(this.$('label').hasClass('active'), false, 'Active class is not on label, if field is blank');
  this.$('input').focus();
  this.$('input').focus();
  assert.equal(this.$('label').hasClass('active'), true, 'Active class is on label if field has focus');
  this.render(hbs`{{md-input label='Last Name' value='North'}}`);
  assert.equal(this.$('label').hasClass('active'), true, 'Active class is on label if field has a value');
});

test('label has active when placeholder displayed', function(assert) {
  this.render(hbs`{{md-input label='Last Name' placeholder='Your Last Name'}}`);
  assert.equal(this.$('label').hasClass('active'), true, 'Active class is on label when placeholder is displayed');
});

test('lable gains active state after programatically populating the value', function(assert) {
  this.set('value', '');
  this.render(hbs`{{md-input label='Last Name' value=value}}`);
  this.set('value', 'North');

  assert.equal(this.$('label').hasClass('active'), true, 'Active class added to label after populating value');
});

test('label loses active state after programatically clearing the value', function(assert) {
  this.set('value', 'North');
  this.render(hbs`{{md-input label='Last Name' value=value}}`);

  this.set('value', '');
  assert.equal(this.$('label').hasClass('active'), false, 'Active class removed from label after programatically clearing value');
});

test('label remains active with placeholder after programatically clearing the value', function(assert) {
  this.set('value', 'North');
  this.render(hbs`{{md-input label='Last Name' placeholder='Your Last Name' value=value}}`);

  this.set('value', '');
  assert.equal(this.$('label').hasClass('active'), true, 'Active class remains after clear with placeholder');
});
