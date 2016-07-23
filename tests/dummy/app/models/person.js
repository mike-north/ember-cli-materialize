//BEGIN-SNIPPET person-model
import DS from 'ember-data';
import {
  validator, buildValidations
}
from 'ember-cp-validations';

const { attr } = DS;

const Validations = buildValidations({
  firstName: validator('presence', true),
  lastName: [
    validator('presence', true),
    validator('length', {
      min: 2,
      max: 8
    })
  ],
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ]
});

export default DS.Model.extend(Validations, {
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string')
});
//END-SNIPPET
