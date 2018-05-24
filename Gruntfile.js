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
                    { src: ['test/flavorstrap.scss'], dest: 'dist/flavorstrap.css' }
                ],
            }
            // example: {
            //     files: {
            //         'dist/flavorstrap2.css': 'test/flavorstrap2.scss'
            //     },                
            //     options: {
            //         debug: true,
            //         fast: true
            //     }
            // }
            //,
            // options: {
            //     debug: true,
            //     fast: false
            // }
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', ['clean', 'flavorstrap']);
    grunt.registerTask('default', ['flavorstrap']);
};