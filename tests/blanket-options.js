/* globals blanket, module */

var options = {
  modulePrefix: 'ember-cli-materialize',
  filter: '//.*ember-cli-materialize/.*/',
  antifilter: '//.*(tests|template).*/',
  enableCoverage: true,
  loaderExclusions: ['highlight.js'],
  cliOptions: {
    reporters: ['lcov'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
