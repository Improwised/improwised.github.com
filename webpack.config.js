const path = require('path');
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PATHS = {
  src: path.join(__dirname)
}

module.exports = {
  mode: 'production',
  entry: './themes/improwised_theme_stark/static/bundel.js',
  output: {
    path: path.resolve(__dirname, './themes/improwised_theme_stark/static/dist'),
    filename: 'index.min.js'
  },
  externals: {
    "jquery": "$"
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [{
      test: /(\.css$)/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: path.resolve(__dirname, './themes/improwised_theme_stark/static/'),
          },
        },
        'css-loader',       
      ],
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      include: [
        path.resolve(__dirname, './themes/improwised_theme_stark/static/'),
      ],
      loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.min.css',
      chunkFilename: '[id]index.min.css.css',
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
  ]
};
