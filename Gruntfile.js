'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: [
              'Gruntfile.js',
              'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: {
            tests: ['tmp']
        },
        flavorstrap: {			
            target: {
		options: {
			debug: true,
			fast: false,
			includePaths: [ "/ExampleFontawesome"]
		},
                files:
                {                      
                    src: 'test/flavorstrap.scss',
                    dest: 'dist/flavorstrap.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('./tasks/flavorstrap');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadTasks('tasks');

    grunt.registerTask('test', ['clean', 'flavorstrap']);
    grunt.registerTask('default', ['flavorstrap']);
};
