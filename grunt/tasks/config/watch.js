module.exports = {

    options: {
        livereload: false
    },

    gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfiles'],
    },

    js: {
        files: '<%= files.lib.js %>',
        tasks: ['jshint:src', 'karma:unit', 'ngtemplates:build', 'concat:build', 'wrap']
    },

    test: {
        files: ['<%= files.test %>'],
        tasks: ['jshint:test', 'karma:unit']
    },

    example: {
        files: ['example/**/*'],
        tasks: ['example']
    }

};
