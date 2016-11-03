/* jshint node: true */



module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'dummy',
        environment: environment,
        rootURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },
        materialize: {
            toasts: {
                warning: {
                    class: 'orange'
                }
            }
        },
        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    ENV.EmberENV.RAISE_ON_DEPRECATION = !process.env['ALLOW_DEPRECATIONS'];

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        // ENV.rootURL = 'ember-materialize-v1-site/';
        ENV.locationType = 'hash';
    }

    return ENV;
};