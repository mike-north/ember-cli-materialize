import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-textarea', {
  unit: true,
  needs: ['helper:bw-compat-icon']
  // specify the other units that are required for this test
});

test('textarea renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('textarea autoresizes on render', function(assert) {
  const component = this.subject({
    value: 'largestring'.repeat(1000)
  });
  this.render();

  const initialHeight = component.$().height();

  const done = assert.async();
  Ember.run.next(() => {
    const autoresizedHeight = component.$().height();
    assert.ok(initialHeight < autoresizedHeight,
      'Text area should autoresize to fit content');
    done();
  });
});

test('textarea autoresizes on value change', function(assert) {
  const component = this.subject();
  this.render();

  const done = assert.async();
  Ember.run.next(() => {
    const initialHeight = component.$().height();

    const textarea = component.$('textarea');
    textarea.val('largestring'.repeat(1000));
    textarea.change();

    Ember.run.next(() => {
      const autoresizedHeight = component.$().height();
      assert.ok(initialHeight < autoresizedHeight,
        'Text area should autoresize to fit content');
      done();
    });
  });
});

test('textarea has class input-field', function(assert) {
  const component = this.subject();
  this.render();
  assert.ok(component.$().hasClass('input-field'));
});

test('textarea has a label', function(assert) {
  const label = 'My Input';
  const component = this.subject({ label });
  this.render();
  assert.equal(component.$('>label').text(), label);
});

test('textarea has a value', function(assert) {
  const value = 'My Input Value';
  const component = this.subject({ value });
  this.render();
  assert.equal(component.get('value'), value);
});

test('textarea label is active with value', function(assert) {
  const component = this.subject({ value: 'some text' });
  this.render();
  assert.ok(component.$('>label').hasClass('active'));
});

test('textarea has an icon', function(assert) {
  const icon = 'mdi-action-face-unlock';
  const component = this.subject({ icon });
  this.render();
  assert.ok(component.$('>i').hasClass(icon));
});

