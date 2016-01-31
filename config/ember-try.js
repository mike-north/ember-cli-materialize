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
      name: 'ember-2.0',
      dependencies: {
        'ember': '~2.0.0'
      }
    },
    {
      name: 'ember-2.1',
      dependencies: {
        'ember': '~2.1.0'
      }
    },
    {
      name: 'ember-2.2',
      dependencies: {
        'ember': '~2.2.0'
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
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
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
