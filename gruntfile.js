'use strict';

module.exports = function (grunt) {


    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        htmlbuild: {
            src: 'templates/index.html',
            dest: 'dist/',
            options: {
                sections: {
                    header: 'templates/header.html',
                    navbar: 'templates/navbar.html',
                    personalDetails: 'templates/personal_details.html'
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {src: ['src/index.html'], flatten: true, dest: 'index.html', filter: 'isFile'}
                ]
            }
        }

    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });
    grunt.registerTask('build', [
        'htmlbuild',
        'copy:main'
    ]);
};
