const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const manifest = require('./webpack/manifest'); // Import the transformer

const browser = process.env.BROWSER || 'chrome';
const isProduction = process.env.NODE_ENV === 'production';
const manifestVersion = process.env.MANIFEST_VERSION == 3 ? 3 : 2;

console.log(`Building for ${browser}, Manifest Version ${manifestVersion}, Mode: ${isProduction ? 'production' : 'development'}`);

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? false : 'eval-source-map', 
  entry: {
    background: './src/background/index.ts',
    popup: './src/popup/index.ts',
    content: './src/content/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist', browser),
    filename: '[name].js',
    clean: true 
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({
      configFile: '../../tsconfig.json'
    })]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader', 
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.json'
        }
      },
      {
        test: /\.(html)$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup/index.html',
      filename: 'popup.html',
      chunks: ['popup']
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: manifestVersion === 3 ? './src/manifest.v3.json' : './src/manifest.json',
          to: 'manifest.json',
          transform: manifest.transform(browser),
        },
        {
          from: './src/images', 
          to: 'images'
        }
      ]
    })
  ],
};
