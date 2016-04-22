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
      this.addPackageToProject('ember-keyboard', '1.0.3'),
      this.addPackageToProject('ember-truth-helpers', '1.2.0'),
      this.addPackageToProject('ember-modal-dialog', '~0.8.0'),
      this.addPackageToProject('ember-cli-sass', 'mike-north/ember-cli-sass#5e0c40ace35ef185e78f9ea921a5e3847958bc0c'),
      this.addPackageToProject('ember-material-design-icons-shim', '0.1.1'),
      this.addPackageToProject('ember-materialize-shim', '0.1.1'),
      this.addPackageToProject('ember-legacy-views', '^0.2.0')
    ]);
  }
}
