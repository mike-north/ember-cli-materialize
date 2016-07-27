/*jshint node:true*/

var RSVP = require('rsvp');

module.exports = {
  description: 'Installation blueprint for ember-cli-materialize v1.x',
  normalizeEntityName: function() {},
  afterInstall: function(options) {
    return this.addAddonsToProject({packages: [
      {name: 'ember-materialize-shim', target: '~0.1.5'},
      {name: 'ember-cli-flash', target: '^1.3.14'},
      {name: 'ember-gestures',  target:'~0.4.1'}
    ]});
  }
};
