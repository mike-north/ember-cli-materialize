import Ember from 'ember';
import layout from '../templates/components/md-card';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['card'],

  classNameBinding: 'class'
});
