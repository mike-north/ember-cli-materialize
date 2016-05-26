var RSVP = require('rsvp');

module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function(options) {
    return this.addBowerPackageToProject('materialize', '~0.97.0');
  },

  afterInstall: function() {
    return RSVP.all([
      this.addPackageToProject('ember-composability', '~0.1.1'),
      this.addPackageToProject('ember-radio-button', '1.0.7'),
      this.addPackageToProject('ember-new-computed', '~1.0.0'),
      this.addPackageToProject('ember-key-responder', '~0.4.0'),
      this.addPackageToProject('ember-modal-dialog', '~0.8.0'),
      this.addPackageToProject('ember-cli-sass', '^5.2.1'),
      this.addPackageToProject('ember-legacy-views', '^0.2.0')
    ]);
  }
}
