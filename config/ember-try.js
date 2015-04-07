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
      name: 'ember-stable',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: { // Resolutions are only necessary when they do not match the version specified in `dependencies`
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: { // Resolutions are only necessary when they do not match the version specified in `dependencies`
        'ember': 'beta'
      }
    }
  ]
};
