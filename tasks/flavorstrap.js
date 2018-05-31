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

        var options = {
            debug: false,
            includePaths: ''
        };

        files = this.files;        
        //For both package testing and development.
        var defaultPaths = ['node_modules/bootstrap-sass/assets/stylesheets/'];

        function Defunk(path) {
            if (options.debug)
                files.map(function (v) {
                    v.previous = v.src;                    
                    v.dest = String(v.dest).substr(0, String(v.dest).lastIndexOf('.')) + path;
                    return v;
                });
        };


        grunt.config.merge({
            sass: {
                target: {
                    files: Defunk('-sassed.css')
                },
                options: {
                    includePaths: (options.includePaths) ? options.includePaths.concat(defaultPaths) : defaultPaths
                }
            }, css_purge: {
                target: {
                    files: Defunk('-purged.css')
                }
            },
            postcss: {
                options: {
                    processors: [
                        require('autoprefixer')({ browsers: ['last 2 version'] })
                    ]
                },
                target: {
                    files: Defunk('-prefixed.css')
                }
            },
            cssmin: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1,
                    sourceMap: true
                },
                target: {
                    files: files
                }
            }
        });

        grunt.task.run('sass');
        if (!options.debug) 
        {
            grunt.task.run('css_purge');
            grunt.task.run('postcss');
            grunt.task.run('cssmin');
        }

    });
};