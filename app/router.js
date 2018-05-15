import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('exercises', function() {
    this.route('button-link-text');
    this.route('form-elements');
    this.route('focus-management');
    this.route('list-children');
    this.route('document-structure');
    this.route('color-contrast');
    this.route('image-description');
  });
});

export default Router;
