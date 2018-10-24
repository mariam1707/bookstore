const config = {
    mode: process.env.NODE_ENV,
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    watch: process.env.NODE_ENV === 'development'
};

module.exports = config;