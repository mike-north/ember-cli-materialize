// import Ember from 'ember';
// import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// moduleForComponent('md-btn-dropdown', 'Integration | Component | md btn dropdown', {
//   integration: true
// });

// test('it renders on origin', function(assert) {
//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });
//   let done = assert.async();
//   this.render(hbs`{{md-btn-dropdown}}`);

//   assert.equal(this.$().text().trim(), '');

//   // Template block usage:
//   this.render(hbs`
//    {{#md-btn-dropdown text='Button'}}
//       <li><a href="#!">one</a></li>
//       <li><a href="#!">two</a></li>
//       <li class="divider"></li>
//       <li><a href="#!">three</a></li>
//     {{/md-btn-dropdown}}
//   `);

//   assert.equal(this.$().text().trim().replace(/[\s\n]+/g, '\n'), `Button
// one
// two
// three`);
//   assert.equal(this.$('.dropdown-content.active').length, 0, 'Dropdown is closed');
//   this.$('.dropdown-button').click();
//   Ember.run(() => {
//     Ember.run.later(() => {
//       assert.equal(this.$('.dropdown-content.active').position().top < 5,  true, 'not below origin');
//       done();
//     }, 300);
//   });
// });
