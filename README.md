# flavorstrap
[![npm version](https://badge.fury.io/js/flavorstrap.svg)](http://badge.fury.io/js/flavorstrap)
[![Build Status](https://travis-ci.org/fassetar/flavorstrap.svg?branch=master)](https://travis-ci.org/fassetar/flavorstrap)
[![Dependency Status](https://david-dm.org/fassetar/flavorstrap.svg)](https://david-dm.org/fassetar/flavorstrap)
[![Built with Grunt](https://img.shields.io/badge/built%20with-grunt-blue.svg)](http://gruntjs.com/)

Create flavors not themes with bootstrap! This package will allow you to create a SINGLE css and to organize your styles while taking advantage of bootstrap's styles. For a more [ in-depth documentation](http://anthonyfassett.blogspot.com/2015/12/flavorstrap-npm-package-in-depth.html) and an example look here.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install flavorstrap --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('flavorstrap');
```

### Overview
In your project's Gruntfile, add a section named `flavorstrap` to the data object passed into `grunt.initConfig()`.
_Run this task with the `grunt flavorstrap` command._

```js
grunt.initConfig({
  flavorstrap: {
    options: {
      		fast: false,
      		debug: false
    },
    target: {
		files: {
			'dist/flavorstrap.css':'src/flavorstrap.scss'
		}
    }
  }
});
```

Create a scss file with the your scss files to extend or overeride bootstrap's css.

```flavorstrap.scss
@import "override.scss";
@import "bootstrap.scss";
@import "extend.scss";
```
### Options

#### fast
Type: `Boolean`  
Default: false

This field is recommended for using with a watch task, rather than run through all the steps during development.

#### debug
Type: `Boolean`  
Default: false

This will print out all the steps for each modified css, for example the purged version and etc.

#Multiple Flavor in a single project!
You can use this project to group all your style development, having just a single grunt project with seperate flavor folders.
Better documentation coming soon...


# Workflow

<img src="https://docs.google.com/drawings/d/1N-ve67CCCUi9YOIZipHALPWvmOc2mHh1oyIkshWAenw/pub?w=960&amp;h=720">

# Contributing
Lint and test your code using the [Grunt](http://gruntjs.com/) task.

## Release History
* 0.1.0 - Updated to postcss and bootstrap 3.3.6
* 0.0.9 - added options (debug,fast).
* 0.0.8 - rewrote task to reuse existing grunt file.
* 0.0.7 - fixed npm readme
* 0.0.6 - Added all the tasks (sass, purge, autoprefix, minify)
* 0.0.5 - More refinements
* 0.0.4 - Added Documents
* 0.0.3 - Updated license
* 0.0.2 - Refinements
* 0.0.1 - Alpha test

## License
Copyright (c) 2015 Anthony Fassett. Licensed under the GPL-3.0.
