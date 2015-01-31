module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function(options) {
    return this.addBowerPackageToProject('materialize', '~0.95.1');
  },

  afterInstall: function() {
    return this.addPackageToProject('ember-cli-sass', '~3.0.3');
  }
};
