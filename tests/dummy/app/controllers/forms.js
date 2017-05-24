import Ember from 'ember';

const {
  Controller,
  A,
  observer,
  computed,
  isPresent,
  later,
  computed: { not }
} = Ember;

function asJSON(propKey) {
  return computed(`${propKey, propKey}.[]`, function() {
    return JSON.stringify(this.get(propKey));
  });
}

export default Controller.extend({
  frameworks: new A([{
    id: 1,
    value: 'Materialize CSS'
  }, {
    id: 2,
    value: 'Ember-CLI Materialize'
  }]),
  message: 'This is a long message. It might flow to the next line if I keep typing, so it\'s better suited to a textarea',
  errors: {
    name: A([]),
    framework: A([])
  },

  // BEGIN-SNIPPET form-validation-basic
  nameDidChange: observer('model.name', function() {
    let messages = [];
    if (!isPresent(this.get('model.name'))) {
      messages = ['This field is required'];
    }
    this.get('errors.name').setObjects(messages);
  }),
  // END-SNIPPET

  frameworkDidChange: observer('framework', function() {
    let self = this;
    later(() => {
      let messages = [];
      if (!isPresent(self.get('framework'))) {
        messages = ['This field is required'];
      }
      this.get('errors.framework').setObjects(messages);
    }, 100);
  }),

  dateValue: '15 January, 1974',
  ageFromDate: computed('dateValue', function() {
    let d = new Date(this.get('dateValue'));
    return new Date().getFullYear() - d.getFullYear();
  }),

  rangeValue: 64,
  switchValue1: true,
  notSwitchValue: not('switchValue'),
  switchValue: true,
  checkValueOne: false,
  checkValueTwo: true,

  checkboxIsSelected: false,
  radioIsSelected: false,
  radioSelection: 2,
  otherRadioSelection: 'green',
  radioChoices: new A([{
    id: 1,
    text: 'One'
  }, {
    id: 2,
    text: 'Two'
  }]),

  radioSelectionString: asJSON('radioSelection'),
  radioChoicesString: asJSON('radioChoices'),

  checkboxSelections: new A([3, 4]),
  checkboxChoices: new A([{
    id: 3,
    label: 'Three'
  }, {
    id: 4,
    label: 'Four'
  }, {
    id: 5,
    label: 'Five'
  }]),

  switchesChoicesString: asJSON('switchesChoices'),
  switchesChoices: new A([{
    key: 6,
    name: 'Six'
  }, {
    key: 7,
    name: 'Seven'
  }, {
    key: 8,
    name: 'Eight'
  }]),
  switchesSelections: new A([7]),
  switchesSelection: 7,
  switchesSelectionString: asJSON('switchesSelection'),
  switchesSelectionsString: asJSON('switchesSelections'),

  checkboxChoicesString: asJSON('checkboxChoices'),
  checkboxSelectionsString: asJSON('checkboxSelections')
});