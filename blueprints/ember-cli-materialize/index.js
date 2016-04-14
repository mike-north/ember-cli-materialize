var RSVP = require('rsvp');

module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function(options) {
    return this.addBowerPackageToProject('materialize', '=<0.97.5');
  },

  afterInstall: function() {
    return RSVP.all([
      this.addPackageToProject('ember-composability', '~0.1.1'),
      this.addPackageToProject('ember-radio-button', '1.0.7'),
      this.addPackageToProject('ember-new-computed', '~1.0.0'),
      this.addPackageToProject('ember-modal-dialog', '~0.7.5'),
      this.addPackageToProject('ember-cli-sass', '^3.3.0'),
      this.addPackageToProject('ember-truth-helpers', '~1.2.0'),
      this.addPackageToProject('ember-keyboard', '^1.0.3')
    ]);
  }
}
