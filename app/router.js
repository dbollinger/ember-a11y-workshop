import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('button-link-text');
  this.route('a11y-2');
  this.route('a11y-3');
});

export default Router;
