import Ember from 'ember';
import layout from '../templates/components/materialize-navbar';

export default Ember.Component.extend({
  tagName: 'nav',
  layout: layout,

  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, function(){
      if(Ember.typeOf(Ember.$('.button-collapse').sideNav) === 'function'){
        this.$('.button-collapse').sideNav({
          closeOnClick: true
        });
      }
    });
  }
});
