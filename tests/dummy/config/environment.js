/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      emberModalDialog: {
        modalRootElementId: 'materialize-modal-root-element'
      }
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.EmberENV.RAISE_ON_DEPRECATION = true;

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.EmberENV.RAISE_ON_DEPRECATION = !process.env['ALLOW_DEPRECATIONS'];

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.baseURL = '/ember-cli-materialize/';
    ENV.baseURL = '/ember-cli-materialize';
    ENV.locationType = 'hash';
  }

  ENV.contentSecurityPolicy = {
    'default-src': "'unsafe-inline'",
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline'",
    'style-src': "'self' 'unsafe-inline'",
    'connect-src': "'self' ",
    'img-src': "'self'",
    'media-src': "'self'"
  };

  return ENV;
};
