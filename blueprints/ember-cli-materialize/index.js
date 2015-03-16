module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function(options) {
    return this.addBowerPackageToProject('materialize', '~0.95.0');
  },

  afterInstall: function() {
    return this.addPackageToProject('ember-cli-sass', '^3.1.0');
  }
};
