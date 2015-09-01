'use strict';

module.exports = function(grunt) { 
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
		target:{
			files: {
			  'dist/flavorstrap.css': ['test/flavorstrap.sass', 'test/flavorstrap.sass']
			}  
		}
      }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');  
  grunt.loadTasks('tasks'); 

  grunt.registerTask('test', ['clean', 'flavorstrap']);  
  grunt.registerTask('default', [ 'flavorstrap']);
};