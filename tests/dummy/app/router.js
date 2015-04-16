import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("badges");
  this.route("buttons");
  this.route("cards");
  this.route("collapsible");
  this.route("copyright");
  this.route("forms");
  this.route("loader");
  this.route("navbar");
  this.route("parallax");
  this.route("tabs");
});

export default Router;
