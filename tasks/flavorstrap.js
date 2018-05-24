/*
 * flavorstrap
 * https://github.com/fassetar/flavorstrap
 *
 * Copyright (c) 2018 fassetar
 * GPL-3.0 License.
 */

module.exports = function (grunt) {
    require('grunt-sass/tasks/sass')(grunt);
    require('grunt-css-purge/tasks/css_purge')(grunt);
    require('grunt-postcss/tasks/postcss')(grunt);
    require('grunt-contrib-cssmin/tasks/cssmin')(grunt);

    grunt.registerMultiTask('flavorstrap', 'Create flavors not themes with bootstrap!', function () {

        this.files.forEach(function (file) {
            grunt.log.writeflags(file, "TEST2");
            var src = file.src.filter(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file ' + chalk.cyan(filepath) + ' not found.');

                    return false;
                }

                return true;
            });

            if (src.length === 0) {
                grunt.log.error('No source files were found.');

                //return done();
            }

            var files = file;//grunt.config.get('flavorstrap.target.files');


            var options = {
                fast: false,
                debug: false,
                includePaths: ''
            };
            //For both package testing and development.
            var defaultPaths = ['node_modules/flavorstrap/node_modules/bootstrap-sass/assets/stylesheets/', 'node_modules/bootstrap-sass/assets/stylesheets/'];

            if (options.debug) {
                grunt.log.writeflags(grunt.config.get('flavorstrap'));
                files.dest = files.dest.substr(0, files.dest.lastIndexOf('.'));
                grunt.log.writeln(files.dest);
            }

            grunt.log.writeflags(files.src, "TEST");
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
    });
};