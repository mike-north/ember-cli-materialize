import Ember from 'ember';

const { computed, Mixin, run: { scheduleOnce } } = Ember;

export default Mixin.create({
  attributeBindings: ['data-activates'],
  'data-activates': computed.alias('_dropdownMenuId'),
  _dropdownMenuId: null,
  classNameBindings: ['_hasDropdown:dropdown-button'],
  _hasDropdown: computed('_dropdownMenuId', function() {
    return !!this.get('_dropdownMenuId');
  }),
  setupDropdown() {
    scheduleOnce('afterRender', () => {
      if (typeof FastBoot === 'undefined') {
        this.$().dropdown();
      }
    });
  }
});
