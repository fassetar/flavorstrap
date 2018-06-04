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

        options = this.options();
        files = this.files;
        grunt.log.writeln(options.includePaths);

        function Defunk(path) {
            var list;
            //if (options.debug) {
            if (typeof flag !== 'undefined' && flag)
                list = files.map(function (v) {
                    v.src = v.dest;
                    grunt.log.writeln(true, v.src);
                    return v;
                });

            list = files.map(function (v) {
                v.dest = String(v.dest).substr(0, String(v.dest).indexOf('.')) + path;
                grunt.log.writeln(v.dest, v.src);
                return v;
            });
            flag = true;
            //}
            return list;
        };

        //console.log(Defunk('.sassed.css'));
        grunt.config.merge({
            sass: {
                target: {
                    files: Defunk('.sassed.css')
                },
                options: options
            }, css_purge: {
                target: {
                    files: Defunk('.purged.css')
                }
            }, postcss: {
                options: {
                    processors: [
                        require('autoprefixer')({ browsers: ['last 2 version'] })
                    ]
                },
                target: {
                    files: files//Defunk('.prefixed.css')
                }
            }, cssmin: {
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
        //grunt.task.run('css_purge');
        // grunt.task.run('postcss');
        // grunt.task.run('cssmin');        
    });
};