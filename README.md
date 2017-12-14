<h1><img src="logo.png">flavorstrap</h1>
<a href="http://badge.fury.io/js/flavorstrap"><img src="https://badge.fury.io/js/flavorstrap.svg">
<a href="https://travis-ci.org/fassetar/flavorstrap"><img src="https://travis-ci.org/fassetar/flavorstrap.svg?branch=master">
<a href="https://david-dm.org/fassetar/flavorstrap"><img src="https://david-dm.org/fassetar/flavorstrap.svg"/><a/>
<a href="http://gruntjs.com/"><img src="https://cdn.gruntjs.com/builtwith.svg"/></a>


Create flavors not themes with bootstrap! This package will allow you to create a SINGLE css and to organize your styles while taking advantage of bootstrap's styles. For a more [ in-depth documentation](http://anthonyfassett.blogspot.com/2015/12/flavorstrap-npm-package-in-depth.html) and an example this project's test folder. This project bundles packages that work out this idea, the same could be done without this package but requires more configuration.

Bootstrap v4 found [here](https://github.com/fassetar/flavorstrap/tree/v4-dev)

Project [Stats](http://npm-stat.com/charts.html?package=flavorstrap&author=fassetar)

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
      	debug: false,
      	includePaths: ['']
    },
    target: {
        files: {
            'dist/flavorstrap.css':'src/flavorstrap.scss'
       }
    }
  }
});
```

Create a scss file with your scss files to extend or overeride bootstrap's css.

```flavorstrap.scss
@import "extend.scss";
@import "bootstrap.scss";
@import "override.scss";
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

#### includePaths
Type: `Array`

This will include paths for the sass compiler. 

### files (coming soon)
Type: `Array` or  `string`
Default: `["bootstrap cdn url or a local file"]`

# Contributing
Lint and test your code using the [Grunt](http://gruntjs.com/) task.

## Future Outline 

- support & examples with bootstrap 3 & 4
- Remove dependency on grunt, make library pure nodejs
- create child packages for grunt & gulp
- support other major css libraries that are sass base.

**Goal to reach all of these before the end of 2018.**

## Release History
* 0.1.6 - Package update.
* 0.1.5 - Added IncludePaths options.
* 0.1.4 - Fixed badge issue.
* 0.1.3 - Updated documents.
* 0.1.2 - Shortened bootstrap reference.
* 0.1.1 - Fixed postcss issue and npm warning
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
