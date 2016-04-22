# ember-cli-materialize


[![Stories in Ready](https://badge.waffle.io/mike-north/ember-cli-materialize.png?label=ready&title=Ready)](https://waffle.io/mike-north/ember-cli-materialize)
[![Build Status](https://travis-ci.org/mike-north/ember-cli-materialize.svg?branch=master)](https://travis-ci.org/mike-north/ember-cli-materialize)
[![npm version](https://badge.fury.io/js/ember-cli-materialize.svg)](http://badge.fury.io/js/ember-cli-materialize)
[![Code Climate](https://codeclimate.com/github/mike-north/ember-cli-materialize/badges/gpa.svg)](https://codeclimate.com/github/mike-north/ember-cli-materialize)
[![Coverage Status](https://coveralls.io/repos/mike-north/ember-cli-materialize/badge.svg?branch=master&service=github)](https://coveralls.io/github/mike-north/ember-cli-materialize?branch=master)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-materialize.svg)](http://emberobserver.com/addons/ember-cli-materialize)
[![Dependency Status](https://david-dm.org/mike-north/ember-cli-materialize.svg)](https://david-dm.org/mike-north/ember-cli-materialize)
[![devDependency Status](https://david-dm.org/mike-north/ember-cli-materialize/dev-status.svg)](https://david-dm.org/mike-north/ember-cli-materialize#info=devDependencies)

An [ember-cli](http://www.ember-cli.com) addon for using [Materialize](http://materializecss.com/) (CSS Framework based on [Material Design](http://www.google.com/design/spec/material-design/introduction.html)) in Ember applications.

**Ember 2.0 Friendly**

**Materialize Version ~0.97.0**

[![NPM](https://nodei.co/npm-dl/ember-cli-materialize.png?months=6)](https://nodei.co/npm/ember-cli-materialize/)

### Which version do I use?

Ember.js version | ember-cli-materialize version
-----------------|--------------
`< 1.10.0`       | Not supported
`1.10.0 <= x <  1.11.0`| [`v0.16.4`](https://github.com/mike-north/ember-cli-materialize/tree/v0.16.4)
`1.11.0 <= x <  1.13.0`| [`v0.18.6`](https://github.com/mike-north/ember-cli-materialize/tree/v0.18.6)
`x >= 1.13.0` | [![npm version](https://badge.fury.io/js/ember-cli-materialize.svg)](http://badge.fury.io/js/ember-cli-materialize)


## Main features

* Imports [Materialize](http://materializecss.com/) sass (via [ember-cli-sass](https://www.npmjs.com/package/ember-cli-sass)) and fonts into your app.
* It's a components library for all Materialize components

## Usage
The [online demo](http://mike.works/ember-cli-materialize) demonstrates all components with all possible options.

Or you can download the demo:
```sh
$ sudo npm install -g ember-cli
$ git clone git@github.com:mike-north/ember-cli-materialize
$ cd ember-cli-materialize
# install dependencies
$ npm install && bower install
# fire up local server
$ ember serve
```

### Configuration

#### Style

Using **SASS** makes configuring the color scheme simple. Just make sure you import `components/color` and `components/variables` before `materialize` like the example below.

```scss
// Example app.scss
@import 'components/color';

// Custom color settings go here
$primary-color: color("pink", "lighten-2");

@import 'components/variables';
@import 'materialize';
@import 'ember-cli-materialize';
```
See the materialize docs on sass variables [here](http://materializecss.com/color.html).

#### Defaults

Some of the library's defaults can be set via your **config/environment.js** file

```javascript
module.exports = function(/* environment, appConfig */) {
  var ENV = {
    materializeDefaults: {
      modalIsFooterFixed:  false,
      buttonIconPosition:  'left',
      loaderSize:          'big',
      loaderMode:          'indeterminate',
      modalContainerId:    'materialize-modal-root-element',
      dropdownInDuration:  300,
      dropdownOutDuration: 300
    },
    ...
  };
}

```

## Installation

```sh
$ ember install ember-cli-materialize
```

### PhantomJS

If you are using PhantomJS version 1.9.x as a test runner then after installing this addon you may experience test failures when running tests via `ember test` that you do not see in a browser.

This is due to the known limitation in PhantomJS 1.9 not providing a `.bind` method. To continue using PhantomJS simply either install [ember-cli-es5-shim](https://github.com/pixelhandler/ember-cli-es5-shim), which provides a `.bind` method, or try PhantomJS 2.x.

## Testing

This addon is continuiously integrated against the following framework versions

Version | Failures Allowed
--------|-------------------
Ember `~1.10.0` | No
Ember `~1.11.0` | No
Ember `~1.12.0` | No
components/ember#release | No
components/ember#beta | No
components/ember#canary | No


## Contributing
See [CONTRIBUTING file](https://github.com/mike-north/ember-cli-materialize/tree/master/CONTRIBUTING.md).

## Special Thanks
Special thanks to [Stefan Gasser](https://github.com/sgasser) for creating and originally maintaining this great library

## License
ember-cli-materialize is released under the MIT License. See the bundled LICENSE file for
details.

![Analytics](https://ga-beacon.appspot.com/UA-66610985-1/mike-north/ember-cli-materialize/readme)
