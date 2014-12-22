/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-materialize',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Bold.ttf', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Light.ttf', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Medium.ttf', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Regular.ttf', { destDir: 'font/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Thin.ttf', { destDir: 'font/roboto' });

    app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.eot', { destDir: 'font/material-design-icons' });
    app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.ttf', { destDir: 'font/material-design-icons' });
    app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.svg', { destDir: 'font/material-design-icons' });
    app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.woff', { destDir: 'font/material-design-icons' });

    app.import(app.bowerDirectory + '/materialize/dist/js/materialize.js');

    //Make sure the ember-cli-sass options are set/appended in the right way (and not just overwriting)
    if(app.options['sassOptions'] && app.options['sassOptions']['includePaths']) {
      app.options['sassOptions']['includePaths'].push(app.bowerDirectory + '/materialize/sass');
    } else {
      app.options['sassOptions'] = app.options['sassOptions'] || {};
      app.options['sassOptions']['includePaths'] = [app.bowerDirectory + '/materialize/sass'];
    }
  }
};
