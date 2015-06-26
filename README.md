# ember-cli-materialize

[![Build Status](https://travis-ci.org/sgasser/ember-cli-materialize.svg)](https://travis-ci.org/sgasser/ember-cli-materialize)
[![Code Climate](https://codeclimate.com/github/sgasser/ember-cli-materialize/badges/gpa.svg)](https://codeclimate.com/github/sgasser/ember-cli-materialize)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-materialize.svg)](http://emberobserver.com/addons/ember-cli-materialize)

An [ember-cli](http://www.ember-cli.com) addon for using [Materialize](http://materializecss.com/) (CSS Framework based on [Material Design](http://www.google.com/design/spec/material-design/introduction.html)) in Ember applications.

*Materialize Version ~0.97.0

## Main features

* Imports [Materialize](http://materializecss.com/) sass (via [ember-cli-sass](https://www.npmjs.com/package/ember-cli-sass)) and fonts into your app.
* It's a components library for all Materialize components

## Usage
The [online demo](http://sgasser.github.io/ember-cli-materialize) demonstrates all components with all possible options.

Or you can download the demo:
```sh
$ sudo npm install -g ember-cli
$ git clone git@github.com:sgasser/ember-cli-materialize
$ cd ember-cli-materialize
# install dependencies
$ npm install && bower install
# fire up local server
$ ember serve
```

### Configuration
Using **SASS** makes configuring the color scheme simple. Just make sure you import `components/color` and `components/variables` before `materialize` like the example below.

```scss
// Example app.scss
@import 'components/color';
@import 'components/variables';

// Custom color settings go here
$primary-color: color("pink", "lighten-2");

@import 'materialize';
```
See the materialize docs on sass variables [here](http://materializecss.com/color.html).


## Installation

```sh
$ ember install ember-cli-materialize
```

## Contributing
See [CONTRIBUTING file](https://github.com/sgasser/ember-cli-materialize/tree/master/CONTRIBUTING.md).

## License
ember-cli-materialize is released under the MIT License. See the bundled LICENSE file for
details.
