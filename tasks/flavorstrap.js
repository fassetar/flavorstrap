/*
 * flavorstrap
 * https://github.com/fassetar/flavorstrap
 *
 * Copyright (c) 2015 Anthony Fassett
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-sass');
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
                        'dist/flavorstrap.css': destFile
                    }
                }
            }            
        });
        
        
        grunt.task.run('sass');        
    });
};