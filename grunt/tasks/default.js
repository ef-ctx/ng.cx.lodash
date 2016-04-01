module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('default', [
        'clean',
        'jshint',
        'concat:build',
        'wrap:build',
        'karma:unit',
        'copy:vendor',
        'watch'
    ]);
};
