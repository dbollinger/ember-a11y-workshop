import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('a11y-1');
  this.route('a11y-2');
  this.route('a11y-3');
  this.route('a11y-activities');
});

export default Router;
