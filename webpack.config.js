const base_config = require('./webpack.base.config');
const path = require('path');
const { resolve } = path;

module.exports = env => {
    return Object.assign({}, base_config(env), {
        entry: {
            index: './src/index.js'
        },
        output: {
            filename: '[name].js',
            path: resolve(__dirname, './build'),
            pathinfo: false,
            crossOriginLoading: 'anonymous'
        },
    })
};
