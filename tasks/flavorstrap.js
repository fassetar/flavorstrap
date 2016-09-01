/*
 * flavorstrap
 * https://github.com/fassetar/flavorstrap
 *
 * Copyright (c) 2015 Anthony Fassett
 * GPL-3.0 License.
 */

module.exports = function (grunt) {
    'use strict';
    require('grunt-sass/tasks/sass')(grunt);
    require('grunt-css-purge/tasks/css_purge')(grunt);
    require('grunt-postcss/tasks/postcss')(grunt);
    require('grunt-contrib-cssmin/tasks/cssmin')(grunt);

    grunt.registerMultiTask('flavorstrap', 'Create flavors not themes with bootstrap!', function () {

        var files = grunt.config.get('flavorstrap.target.files');
        grunt.log.writeflags(this.options());
        var options = {
            fast: (this.options.fast) ? true : false,
            debug: (this.options.debug) ? true : false,
            includePaths: this.options.includePaths
        };
        //For both package testing and development.
        var defaultPaths = ['node_modules/flavorstrap/node_modules/bootstrap-sass/assets/stylesheets/', 'node_modules/bootstrap-sass/assets/stylesheets/'];

        if (options.debug) {
            grunt.log.writeflags(grunt.config.get('flavorstrap'));
            files.dest = files.dest.substr(0, files.dest.lastIndexOf('.'));
            grunt.log.writeln(files.dest);
        }

        grunt.config.merge({
            sass: {
                target: {
                    files: [{
                        dest: (options.debug) ? (files.dest + '.sassed.css') : files.dest, src: files.src
                    }]
                },
                options: {
                    includePaths: (options.includePaths) ? options.includePaths.concat(defaultPaths) : defaultPaths
                },
            },
            css_purge: {
                target: {
                    files: [{
                        dest: (options.debug) ? (files.dest + '.purged.css') : files.dest, src: (options.debug) ? (files.dest + '.sassed.css') : files.dest
                    }]
                }
            },
            postcss: {
                options: {
                    processors: [
                      require('autoprefixer')({ browsers: ['last 2 version'] })
                    ]
                },
                target: {
                    files: [{
                        dest: (options.debug) ? (files.dest + '.prefixed.css') : files.dest, src: (options.debug) ? (files.dest + '.purged.css') : files.dest
                    }]
                }
            },
            cssmin: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1,
                    sourceMap: true
                },
                target: {
                    files: [{
                        dest: (options.debug) ? (files.dest + '.min.css') : files.dest, src: (options.debug) ? (files.dest + '.prefixed.css') : files.dest
                    }]
                }
            }
        });

        grunt.task.run('sass');
        if (!options.fast) //Don't run in fast mode. 
        {
            grunt.task.run('css_purge');
            grunt.task.run('postcss');
            grunt.task.run('cssmin');
        }
    });
};
