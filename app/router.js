import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('button-link-text');
  this.route('form-elements');
  this.route('focus-management');
});

export default Router;
