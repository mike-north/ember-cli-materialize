import Ember from "ember";

function asJSON(propKey) {
  return new Ember.computed(propKey,propKey + '.[]', function () {
    return JSON.stringify(this.get(propKey));
  });
}

export default Ember.Controller.extend({
  frameworks: new Ember.A([
      {id: 1, value: 'Materialize CSS'},
      {id: 2, value: 'Ember-CLI Materialize'}
  ]),

  errors: Ember.Object.create({
    name: new Ember.A([]),
    framework: new Ember.A([])
  }),

  nameDidChange: Ember.observer('name', function() {
    var errors = this.get('errors');
    var messages = [];
    if (!Ember.isPresent(this.get('name'))) {
      messages = ['This field is required'];
    }
    errors.set('name', messages);
    this.set('errors', errors);
  }),

  frameworkDidChange: Ember.observer('framework', function() {
    var self = this;
    var errors = self.get('errors');
    Ember.run.later(function() {
      var messages = [];
      if (!Ember.isPresent(self.get('framework'))) {
        messages = ['This field is required'];
      }
      errors.set('framework', messages);
      self.set('errors', errors);
    }, 100);
  }),
  rangeValue: 64,
  switchValue1: true,
  notSwitchValue: Ember.computed.not('switchValue'),
  switchValue: true,
  checkValueOne: false,
  checkValueTwo: true,

  checkboxIsSelected: false,
  radioIsSelected: false,
  radioSelection: 2,
  otherRadioSelection: 'green',
  radioChoices: Ember.A([{ id: 1, text: "One" }, { id: 2, text: "Two" }]),

  radioSelectionString: asJSON("radioSelection"),
  radioChoicesString: asJSON("radioChoices"),

  checkboxSelections: Ember.A([3, 4]),
  checkboxChoices: Ember.A([{ id: 3, label: "Three" }, { id: 4, label: "Four" }, { id: 5, label: "Five" }]),

  switchesChoicesString: asJSON('switchesChoices'),
  switchesChoices: Ember.A([{ key: 6, name: "Six" }, { key: 7, name: "Seven" }, { key: 8, name: "Eight" }]),
  switchesSelections: Ember.A([7]),
  switchesSelection: 7,
  switchesSelectionString: asJSON('switchesSelection'),
  switchesSelectionsString: asJSON('switchesSelections'),

  checkboxChoicesString: asJSON("checkboxChoices"),
  checkboxSelectionsString: asJSON("checkboxSelections")
});
