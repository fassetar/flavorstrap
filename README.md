# flavorstrap
Create flavors not themes with bootstrap!

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

## The "autoprefixer" task

### Overview
In your project's Gruntfile, add a section named `flavorstrap` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  flavorstrap: {
    options: {
      // Task-specific options go here.
    },
    target: {
		files: {
			'dist/flavorstrap.css':'flavorstrap.sass'
		}
    },
  },
})
```

Create a sass file with the your scss files to extend or overeride bootstrap's css.

```flavorstrap.sass
@import "override.scss";
@import "../node_modules/bootstrap-sass/assets/stylesheets/bootstrap.scss"
@import "extend.scss";
```

# Workflow

<img src="https://docs.google.com/drawings/d/1N-ve67CCCUi9YOIZipHALPWvmOc2mHh1oyIkshWAenw/pub?w=960&amp;h=720">