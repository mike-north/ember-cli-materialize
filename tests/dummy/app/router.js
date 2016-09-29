import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const AppRouter = Router.extend({
  location: config.locationType
});

AppRouter.map(function() {
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

export default AppRouter;
