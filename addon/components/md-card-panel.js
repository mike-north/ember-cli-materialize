import Ember from 'ember';
import layout from '../templates/components/md-card-panel';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['card-panel'],

  classNameBinding: 'class'
});

