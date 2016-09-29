var RSVP = require('rsvp');

module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-composability', target: '~0.3.7' },
        { name: 'ember-radio-button', target: '1.0.7' },
        { name: 'ember-new-computed', target: '~1.0.2' },
        { name: 'ember-keyboard', target: '1.0.3' },
        { name: 'ember-truth-helpers', target: '1.2.0' },
        { name: 'ember-modal-dialog', target: '~0.8.0' },
        { name: 'ember-materialize-shim', target: '~0.2.0' }
      ]
    });
  }
};
