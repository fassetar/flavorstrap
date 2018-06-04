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
                files: [
                    { src: ['test/flavor/flavor.scss'], dest: 'dist/flavor/first-flavorstrap.css' },
                    { src: ['test/second-flavor/flavor2.scss'], dest: 'dist/second-flavor/second-flavorstrap.css' }
                ],
                options: {
                    includePaths : ['node_modules/bootstrap-sass/assets/stylesheets/'],
                    debug: true                    
                }
            }
            // ,
            // example: {
            //     files: {
            //         'dist/flavorstrap2.css': 'test/flavorstrap.scss'
            //     },                
            //     options: {
            //         debug: true
            //     }
            // }
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', ['clean', 'flavorstrap']);
    grunt.registerTask('default', ['flavorstrap']);
};