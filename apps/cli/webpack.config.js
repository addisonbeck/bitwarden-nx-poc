const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = (config, context) => { 
  const absoluteOutputPath = path.resolve(context.context.root, context.options.outputPath);

  return {
    entry: 'apps/cli/src/index.ts',
    target: 'node',
    mode: context.configurationName === 'production' ? 'production' : 'development', 
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            configFile: 'apps/cli/tsconfig.json' 
          }
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
      plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.base.json' })],
    },
    output: {
      path: absoluteOutputPath, 
      filename: 'main.js'      
    },
    externals: [
      nodeExternals({
        modulesDir: "../../node_modules",
        allowlist: [/@bitwarden/],
      }),
    ],
    node: {
      __dirname: false,
      __filename: false,
    }
  };
};
