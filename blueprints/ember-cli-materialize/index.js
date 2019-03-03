/* eslint-env node */

module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-composability', target: '~0.3.7' },
        { name: 'ember-radio-button', target: '1.0.7' },
        { name: 'ember-keyboard', target: '3.0.0' },
        { name: 'ember-truth-helpers', target: '1.2.0' },
        { name: 'ember-modal-dialog', target: '~0.8.0' },
        { name: 'ember-materialize-shim', target: '~0.2.0' }
      ]
    });
  }
};
