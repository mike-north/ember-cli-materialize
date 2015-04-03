import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("buttons");
  this.route("navbar");
  this.route("cards");
  this.route("collapsible");
  this.route("input");
  this.route("parallax");
  this.route("collections");
});

export default Router;
