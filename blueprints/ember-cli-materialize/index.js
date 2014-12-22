module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function(options) {
    return this.addBowerPackageToProject('materialize', '~0.93.0');
  },

  afterInstall: function() {
    return this.addPackageToProject('ember-cli-sass', '~3.0.3');
  }
};
