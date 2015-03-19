import Ember from 'ember';
import layout from '../templates/components/materialize-card-content';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['card-content'],
  classNameBinding: 'class',
  titleBinding: 'parentView.title',
  titleClassBinding: 'parentView.titleClass',
  activatorBinding: 'parentView.activator',
  cardTitleClass: function() {
    var clz = this.get('titleClass');
    return (clz) ? clz : 'black-text';
  }.property('titleClass')
});

