const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (config, context) => {
  const absoluteOutputPath = path.resolve(context.context.root, context.options.outputPath);

  return {
    entry: 'apps/desktop/src/renderer/index.ts', 
    target: 'electron-renderer',
    mode: context.options.mode || 'development', 
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            configFile: 'apps/desktop/tsconfig.json' 
          }
        },
        {
          test: /\.(html)$/,
          use: 'html-loader'
        }
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
      plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.base.json' })], 
    },
    output: {
      filename: 'renderer.js',
      path: absoluteOutputPath, 
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'apps/desktop/src/renderer/index.html', 
      })
    ],
  };
};
