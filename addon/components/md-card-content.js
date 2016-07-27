import Ember from 'ember';
import layout from '../templates/components/md-card-content';

const { Component, computed, computed: { alias } } = Ember;

export default Component.extend({
  layout,

  classNames: ['card-content'],

  classNameBindings: ['class'],
  title: alias('parentView.title'),
  titleClass: alias('parentView.titleClass'),
  activator: alias('parentView.activator'),

  cardTitleClass: computed('titleClass', function() {
    return this.get('titleClass') || 'black-text';
  })
});

