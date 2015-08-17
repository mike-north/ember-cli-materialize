module.exports = {
  scenarios: [
    {
      name: 'ember-1.11',
      dependencies: {
        'ember': '~1.11.0',
        'ember-load-initializers': 'ember-cli/ember-load-initializers#0.0.2'
      }
    },
    {
      name: 'ember-1.12',
      dependencies: {
        'ember': '~1.12.0'
      }
    },
    {
      name: 'default',
      dependencies: {}
    },
    {
      name: 'ember-1.13',
      dependencies: {
        'ember': '~1.13.0'
      }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': '2.0.0-beta.5'
      },
      resolutions: {
        'ember': '2.0.0-beta.5'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  ]
};
