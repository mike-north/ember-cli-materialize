import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("buttons");
  this.route("navbar");
  this.route('badges');
});

export default Router;
