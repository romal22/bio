'use strict';

module.exports = function (grunt) {


    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {

            html: {
                files: ['templates/*.html'],
                tasks: ['htmlbuild','copy:main']
            },
            styles: {
                files: ['styles/styles.less'],
                tasks: ['less', 'autoprefixer']
            }

        },
        autoprefixer: {
            options: {
                browsers: ['last 5 version', 'ie 8', 'ie 9', 'Firefox ESR', 'Opera 12.1']
            },

            // prefix the specified file
            single_file: {
                options: {
                    browsers: ['last 5 version', 'ie 8', 'ie 9', 'Firefox ESR', 'Opera 12.1']
                },
                src: 'styles/style.css',
                dest: 'styles/main.css'
            }
        },
        less: {
            dist: {
                options: {
                    yuicompress: true,
                    paths: ['styles/{.[^.],}*']
                },
                files: {
                    'styles/style.css': 'styles/styles.less'


                }
            }
        },
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
        'copy:main',
        'less',
        'autoprefixer'
    ]);
};
