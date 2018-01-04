import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('badges');
  this.route('buttons');
  this.route('cards');
  this.route('collapsible');
  this.route('collection');
  this.route('copyright');
  this.route('forms');
  this.route('loader');
  this.route('modal');
  this.route('navbar');
  this.route('pagination');
  this.route('parallax');
  this.route('tables');
  this.route('tabs');
  this.route('colors');
});

export default Router;
