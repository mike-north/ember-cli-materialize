import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'div',

  classNames: ['card-reveal'],

  classNameBinding: 'class',

  activatorBinding: 'parentView.activator'

});
