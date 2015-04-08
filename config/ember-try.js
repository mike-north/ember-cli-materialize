module.exports = {
  scenarios: [
    {
      name: 'ember-1.10',
      dependencies: {
        'ember': '1.10.0'
      }
    },
    {
      name: 'ember-1.11.0',
      dependencies: {
        'ember': '1.11.0'
      }
    },
    {
      name: 'ember-1.11.1',
      dependencies: {
        'ember': '1.11.1'
      }
    },
    {
      name: 'ember-stable',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-1.12.0-beta.1',
      dependencies: {
        'ember': '1.12.0-beta.1'
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
