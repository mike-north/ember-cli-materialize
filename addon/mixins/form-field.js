import Ember from 'ember';

const { computed, computed: { empty }, Mixin } = Ember;

export default Mixin.create({
  errorMessages: null,
  init() {
    this._super(...arguments);
    this.set('errorMessages', this.errorMessages || []);
  },
  validate: computed('errorMessages', function() {
    return this.get('errorMessages') !== null;
  }),
  valid: empty('errorMessages'),
  error: computed('errorMessages.[]', function() {
    return this.get('errorMessages.firstObject');
  })
});
