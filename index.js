/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-materialize',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Thin.woff2', { destDir: 'assets/fonts/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Thin.woff', { destDir: 'assets/fonts/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Thin.ttf', { destDir: 'assets/fonts/roboto' });

    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Light.woff2', { destDir: 'assets/fonts/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Light.woff', { destDir: 'assets/fonts/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Light.ttf', { destDir: 'assets/fonts/roboto' });

    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Regular.woff2', { destDir: 'assets/fonts/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Regular.woff', { destDir: 'assets/fonts/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Regular.ttf', { destDir: 'assets/fonts/roboto' });

    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Medium.woff2', { destDir: 'assets/fonts/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Medium.woff', { destDir: 'assets/fonts/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Medium.ttf', { destDir: 'assets/fonts/roboto' });

    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Bold.woff2', { destDir: 'assets/fonts/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Bold.woff', { destDir: 'assets/fonts/roboto' });
    app.import(app.bowerDirectory + '/materialize/dist/font/roboto/Roboto-Bold.ttf', { destDir: 'assets/fonts/roboto' });

    app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.eot', { destDir: 'assets/fonts/material-design-icons' });
    app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.ttf', { destDir: 'assets/fonts/material-design-icons' });
    app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.svg', { destDir: 'assets/fonts/material-design-icons' });
    app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.woff', { destDir: 'assets/fonts/material-design-icons' });
    app.import(app.bowerDirectory + '/materialize/dist/font/material-design-icons/Material-Design-Icons.woff2', { destDir: 'assets/fonts/material-design-icons' });

    app.import(app.bowerDirectory + '/materialize/dist/js/materialize.js');
  }
};
