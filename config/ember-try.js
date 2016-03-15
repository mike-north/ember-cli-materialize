/*jshint node:true*/

function scenario(emberVersion) {
  return {
    name: 'ember-' + emberVersion,
    bower: {
      dependencies: {
        'ember': '~' + emberVersion + '.0'
      },
      resolutions: {
        'ember': '~' + emberVersion + '.0'
      }
    }
  };
}


module.exports = {
  scenarios: [
    scenario('1.13'),
    scenario('2.0'),
    scenario('2.1'),
    scenario('2.2'),
    scenario('2.3'),
    scenario('2.4'),
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          'ember': 'components/ember#release'
        },
        resolutions: {
          'ember': 'release'
        }
      }
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          'ember': 'components/ember#beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      }
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          'ember': 'components/ember#canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      }
    }
  ]
};
