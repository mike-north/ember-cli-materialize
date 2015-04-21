import Ember from 'ember';
import layout from '../templates/components/md-card-content';
import computed from 'ember-new-computed';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['card-content'],

  classNameBinding: 'class',
  titleBinding: 'parentView.title',
  titleClassBinding: 'parentView.titleClass',
  activatorBinding: 'parentView.activator',

  cardTitleClass: computed('titleClass',{
    get() {
      var clz = this.get('titleClass');
      return (clz) ? clz : 'black-text';
    }
  })
});

