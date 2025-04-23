const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

module.exports = (config, context) => {
  const absoluteOutputPath = path.resolve(context.context.root, context.options.outputPath);

  return {
    entry: 'apps/desktop/src/main/index.ts', 
    target: 'electron-main',
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
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
      plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.base.json' })], 
    },
    output: {
      filename: 'main.js',
      path: absoluteOutputPath, 
    },
    plugins: [ 
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'apps/desktop/src/package.json', 
            to: absoluteOutputPath 
          }
        ]
      })
    ]
  };
};
