import Ember from 'ember';
import layout from '../templates/components/md-card-content';

const { Component, computed } = Ember;

export default Component.extend({
  layout,

  classNames: ['card-content'],

  classNameBinding: 'class',
  titleBinding: 'parentView.title',
  titleClassBinding: 'parentView.titleClass',
  activatorBinding: 'parentView.activator',

  cardTitleClass: computed('titleClass', function() {
    return this.get('titleClass') || 'black-text';
  })
});

