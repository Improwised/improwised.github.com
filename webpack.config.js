const path = require('path');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { web } = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    performance: {
        maxEntrypointSize: 2000000,
        maxAssetSize: 2000000
    },
    optimization: {
        minimize: true,
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './public'),
        open: true,
        compress: true,
        hot: true,
      //port:9000    
    },
    entry: {
        main:  path.resolve(__dirname, './themes/improwised_theme_stark/static/bundel.js')
    },
    output: {
        path: path.resolve(__dirname, './themes/improwised_theme_stark/static/dist'),
        filename: 'index.min.js'
    },
    module: {
        rules: [
            // CSS
            {
                test: /(\.css$)/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                include: [
                  path.resolve(__dirname, './themes/improwised_theme_stark/static/'),
                ],
            },
            // Images
            {
                test: /\.(?:png|woff|woff2|eot|ttf|svg|jpg)$/i,
                include: [
                  path.resolve(__dirname, './themes/improwised_theme_stark/static/'),
                ],
                type: 'asset/resource',
                use: ['url-loader'],
            },
        ],
    },
    externals: {
        jquery: '$',
    },
    plugins: [  
          new CleanWebpackPlugin(),
          new webpack.HotModuleReplacementPlugin(), 
          new MiniCssExtractPlugin()    
    ],
}
