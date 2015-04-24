module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function(options) {
    return this.addBowerPackageToProject('materialize', '~0.96.0');
  },

  afterInstall: function() {
    return this.addPackageToProject('ember-radio-button',   '1.0.4').then(function () {
      return this.addPackageToProject('ember-new-computed',   '~1.0.0').then(function () {
        return this.addPackageToProject('ember-key-responder',  '0.2.1').then(function () {
          return this.addPackageToProject('ember-modal-dialog',   '0.3.0').then(function () {
            return this.addPackageToProject('ember-cli-sass',       '^3.3.0');
          }.bind(this));
        }.bind(this));
      }.bind(this));
    }.bind(this));
  }
};
