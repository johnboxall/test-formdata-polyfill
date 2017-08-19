module.exports = {
    entry: './index.js',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            }
        ]
    }
}