module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function(options) {
    return this.addBowerPackageToProject('materialize', '~0.96.0');
  },

  afterInstall: function() {
    return this.addPackageToProject('ember-cli-sass', '^3.3.0');
  }
};
