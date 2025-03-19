const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const manifest = require('./webpack/manifest'); // Keep transformer relative

module.exports = (config, context) => {
  const browser = context.options.browser || 'chrome';
  const isProduction = context.options.mode === 'production';
  const manifestVersion = context.options.manifestVersion || (browser === 'firefox' ? 2 : 3); 

  console.log(`Building for ${browser}, Manifest Version ${manifestVersion}, Mode: ${isProduction ? 'production' : 'development'}`);

  const absoluteBaseOutputPath = path.resolve(context.context.root, context.options.outputPath);
  const finalOutputPath = path.join(absoluteBaseOutputPath, browser);

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'eval-source-map',
    entry: {
      background: 'apps/browser/src/background/index.ts',
      popup: 'apps/browser/src/popup/index.ts',
      content: 'apps/browser/src/content/index.ts'
    },
    output: {
      path: finalOutputPath, 
      filename: '[name].js',
      clean: true 
    },
    resolve: {
      extensions: ['.ts', '.js'],
      plugins: [new TsconfigPathsPlugin({
        configFile: 'tsconfig.base.json'
      })]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            configFile: 'apps/browser/tsconfig.json'
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
        template: 'apps/browser/src/popup/index.html',
        filename: 'popup.html',
        chunks: ['popup']
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: manifestVersion === 3 ? 'apps/browser/src/manifest.v3.json' : 'apps/browser/src/manifest.json',
            to: 'manifest.json',
            transform: manifest.transform(browser), 
          },
          {
            from: 'apps/browser/src/images',
            to: 'images'
          }
        ]
      })
    ],
  };
};
