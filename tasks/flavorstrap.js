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
    require('grunt-autoprefixer/tasks/autoprefixer')(grunt);
    require('grunt-contrib-cssmin/tasks/cssmin')(grunt);

    grunt.registerMultiTask('flavorstrap', 'Create flavors not themes with bootstrap!', function () {        

        grunt.log.writeflags(grunt.config.get('flavorstrap'));        
        var files = grunt.config.get('flavorstrap.target.files');
		var options = {
			fast: (grunt.config.get('flavorstrap.target.options').fast)? true : false,
			debug: (grunt.config.get('flavorstrap.target.options').debug) ? true: false			
		};        
		if(options.debug)
			files.dest = files.dest.substr(0, files.dest.lastIndexOf('.'));
		grunt.log.writeln(files.dest);
        grunt.initConfig({
            sass: {
                target: {
                    files: [{                   
                         dest: (options.debug) ? (files.dest + '.sassed.css') : files.dest, src: files.src
                    }]
                }
            },
            css_purge: {
                target: {
                    files: [{
                        dest: (options.debug) ? (files.dest + '.purged.css'): files.dest, src: (options.debug) ? (files.dest+'.sassed.css'): files.dest
                    }]
                }
            },
            autoprefixer: {
                target: {
                    files: [{
                        dest: (options.debug) ? (files.dest + '.prefixed.css'): files.dest, src: (options.debug) ? (files.dest+'.purged.css'): files.dest
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
                        dest: (options.debug)? (files.dest + '.min.css'): files.dest, src: (options.debug) ? (files.dest+'.prefixed.css'): files.dest
                    }]
                }
            }
        });

        grunt.task.run('sass');		
		if(!options.fast) //Don't run in fast mode. 
		{
			grunt.task.run('css_purge');
			grunt.task.run('autoprefixer');		
			grunt.task.run('cssmin');        
		}
    });
};
