/*
 * flavorstrap
 * https://github.com/fassetar/flavorstrap
 *
 * Copyright (c) 2015 Anthony Fassett
 * GPL-3.0 License.
 */

'use strict';

module.exports = function (grunt) {
    require('grunt-sass/tasks/sass')(grunt);
    require('grunt-css-purge/tasks/css_purge')(grunt);
    require('grunt-autoprefixer/tasks/autoprefixer')(grunt);
    require('grunt-contrib-cssmin/tasks/cssmin')(grunt);

    grunt.registerMultiTask('flavorstrap', 'Create flavors not themes with bootstrap!', function () {        

        grunt.log.writeflags(grunt.config.get('flavorstrap'));
        grunt.log.writeln(grunt.config.get('flavorstrap.target.files').dest);
        var tes = grunt.config.get('flavorstrap.target.files');
        
        grunt.initConfig({
            sass: {
                dist: {
                    files: [{                   
                        src: tes.src, dest: tes.dest
                    }]
                }
            },
            css_purge: {
                target: {
                    files: [{
                        src: tes.dest, dest: tes.dest
                    }]
                }
            },
            autoprefixer: {
                target: {
                    files: [{
                        src: tes.dest, dest: tes.dest
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
                        src: tes.dest,
                        dest: tes.dest
                    }]
                }
            }
        });

        grunt.task.run('sass');
        grunt.task.run('css_purge');
        grunt.task.run('autoprefixer');
        grunt.task.run('cssmin');
        // Print a success message.            
        //grunt.log.writeln('File "' + destFile + '" created.');
    });
};