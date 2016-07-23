import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('forms');
  this.route('collapsible');
  this.route('pagination');
  this.route('collection');
  this.route('nav');
  this.route('sidenav');
  this.route('button');
  this.route('card');
  this.route('loader');
  this.route('modal');
  this.route('tabs');
  this.route('crumb', function() {
    this.route('thing', function() {});
    this.route('other-thing', function() {});
    this.route('third-thing', function() {});
  });
  this.route('toasts');
});

export default Router;
