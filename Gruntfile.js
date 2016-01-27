module.exports = function(grunt) {


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Here are our tasks configurations
    grunt.initConfig({
        // JAVASCRIPTS
        less: {
            development: {
                files: {
                    './web/assets/css/app.css' : './bin/less/app.less'
                }
            }
        },

        jshint: {
            files: ['./web/assets/js/**/*.js', 'Gruntfile.js']
        },

        watch: {
            options: {
                spawn: false,
                event: ["added", "deleted", "changed"],
                livereload: true
            },
            less: {
                files: ['./bin/less/**/*.less'],
                tasks: [ 'less' ]
            },
            scripts: {
                files: ['./web/assets/js/**/*.js'],
                tasks: [ 'jshint' ]

            }
        }
    });
    grunt.registerTask('default', ['jshint', 'watch']);

};