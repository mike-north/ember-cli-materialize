import Ember from 'ember';

export default Ember.View.extend({
  classNameBindings: ['textAlignClass'],
  textAlignClass: Ember.computed('column.align', function () {
    return `${this.get('column.align')}-align`;
  })
});
