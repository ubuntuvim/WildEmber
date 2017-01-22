// app/router.js

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('invitation');
    this.route('contact', function() {
      this.route('edit', { path: '/:contact_id/edit' });
    });
    this.route('seeder');
  });

  this.route('libraries', function() {
    this.route('new');
    // :library_id是一个动态段，会根据实际的URL变化
    this.route('edit', { path: '/:library_id/edit' });
  });

  this.route('pagination');
  this.route('user');
});

export default Router;
