import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['span'],
  classNames: ['badge'],
  classNameBindings: ['isNew:new'],
  value: null
});
