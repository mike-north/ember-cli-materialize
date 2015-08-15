import Ember from 'ember';

const { Controller, A, observer, computed } = Ember;

function asJSON(propKey) {
  return new Ember.computed(`${propKey,propKey}.[]`, function() {
    return JSON.stringify(this.get(propKey));
  });
}

export default Controller.extend({
  frameworks: new A([
      { id: 1, value: 'Materialize CSS' },
      { id: 2, value: 'Ember-CLI Materialize' }
  ]),
  message: `This is a long message. It might flow to the next line if I keep typing, so it's better suited to a textarea`,
  errors: Ember.Object.create({
    name: new A([]),
    framework: new A([])
  }),

  // BEGIN-SNIPPET form-validation-basic
  nameDidChange: Ember.observer('name', function() {
    const errors = this.get('errors');
    let messages = [];
    if (!Ember.isPresent(this.get('name'))) {
      messages = ['This field is required'];
    }
    errors.set('name', messages);
    this.set('errors', errors);
  }),
  // END-SNIPPET

  frameworkDidChange: observer('framework', function() {
    const self = this;
    const errors = self.get('errors');
    Ember.run.later(function() {
      let messages = [];
      if (!Ember.isPresent(self.get('framework'))) {
        messages = ['This field is required'];
      }
      errors.set('framework', messages);
      self.set('errors', errors);
    }, 100);
  }),

  dateValue: '15 January, 1974',
  ageFromDate: computed('dateValue', function() {
    const d = new Date(this.get('dateValue'));
    return new Date().getFullYear() - d.getFullYear();
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
  radioChoices: new A([{ id: 1, text: 'One' }, { id: 2, text: 'Two' }]),

  radioSelectionString: asJSON('radioSelection'),
  radioChoicesString: asJSON('radioChoices'),

  checkboxSelections: new A([3, 4]),
  checkboxChoices: new A([{ id: 3, label: 'Three' }, { id: 4, label: 'Four' }, { id: 5, label: 'Five' }]),

  switchesChoicesString: asJSON('switchesChoices'),
  switchesChoices: new A([{ key: 6, name: 'Six' }, { key: 7, name: 'Seven' }, { key: 8, name: 'Eight' }]),
  switchesSelections: new A([7]),
  switchesSelection: 7,
  switchesSelectionString: asJSON('switchesSelection'),
  switchesSelectionsString: asJSON('switchesSelections'),

  checkboxChoicesString: asJSON('checkboxChoices'),
  checkboxSelectionsString: asJSON('checkboxSelections')
});
