module.exports = {
    options: {
        module: 'ng.cx.lodash',
        htmlmin: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }
    },

    build: {
        src: '<%= files.lib.tpl %>',
        dest: '<%= build.tpl %>'
    },

    dist: {
        options: {},

        src: '<%= files.lib.tpl %>',
        dest: '<%= dist.tpl %>'
    },

    example: {
        options: {
            module: 'ng.cx.lodash.example'
        },
        src: '<%= files.example.tpl %>',
        dest: '<%= build.example.tpl %>'
    }

};
