/*
 * flavorstrap
 * https://github.com/fassetar/flavorstrap
 *
 * Copyright (c) 2015 Anthony Fassett
 * GPL-3.0 License.
 */

'use strict';

module.exports = function (grunt) {
    var temp = require("temp");
    var fs = require("fs");
    temp.track(); // Cleanup files, please 	
    require('grunt-sass/tasks/sass')(grunt);
	require('grunt-css-purge/tasks/css_purge')(grunt);	
	require('grunt-autoprefixer/tasks/autoprefixer')(grunt);        
	require('grunt-contrib-cssmin/tasks/cssmin')(grunt);            
	
    var destFile = {};
    grunt.registerMultiTask('flavorstrap', 'Create flavors not themes with bootstrap!', function () {
        this.files.forEach(function (file) {
            var contents = file.src.filter(function (filepath) {
                // Remove nonexistent files (it's up to you to filter or warn here).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (filepath) {
                // Read and return the file's source.
                return grunt.file.read(filepath);
            }).join('\n');
            // Write joined contents to destination filepath.
            grunt.file.write(file.dest, contents);
            // Print a success message.            
            grunt.log.writeln('File "' + file.dest + '" created.');
            destFile = file.orig.src;
        });
        grunt.log.writeln("test", destFile);
        grunt.initConfig({
            sass: {
                dist: {
                    files: {
                        'dist/flavorstrap.sassed.css': destFile
                    }
                }
            },
            css_purge: {
                target: {
                    files: {
                        'dist/flavorstrap.purged.css': 'dist/flavorstrap.sassed.css'
                    }
                }
            },
            autoprefixer: {
                target: {
                    files: {
                        'dist/flavorstrap.css': 'dist/flavorstrap.purged.css'
                    }
                }
            },
            cssmin: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1,
                    sourceMap: true
                },
                target: {
                    files: {
                        'dist/flavorstrapv.min.css': 'dist/flavorstrap.css'
                    }
                }
            }
        });

        grunt.task.run('sass');
        grunt.task.run('css_purge');
        grunt.task.run('autoprefixer');
        grunt.task.run('cssmin');
    });
};