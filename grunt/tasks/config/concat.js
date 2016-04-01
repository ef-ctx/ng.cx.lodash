module.exports = {

    options: {
        banner: '<%= banner %>',
        process: function removeUseStrictStatement(src, filePath) {
            'use strict';

            return src.replace(/'use\ strict';/g, '');
        }
    },

    example: {
        src: ['<%= files.example.js %>', '<%= build.example.tpl %>'],
        dest: '<%= build.example.js %>'
    },

    build: {
        src: ['<%= files.lib.vendor %>', '<%= files.lib.js %>'],
        dest: '<%= build.js %>'
    },

    dist: {
        src: ['<%= files.lib.vendor %>', '<%= files.lib.js %>'],
        dest: '<%= dist.js %>'
    }

};
