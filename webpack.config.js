module.exports = {
    entry: './src/entry.js',
    output: {
        path:__dirname,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders:[
            {test: /\.js$/, exclude: /node_modules/, loader:'react-hot!babel'},
            {test: /\.css$/, loader:'style!css'}
        ]
    }
};
