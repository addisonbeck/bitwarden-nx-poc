const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const manifest = require('./webpack/manifest'); // Import the transformer

// --- Start Added/Modified ---
const browser = process.env.BROWSER || 'chrome';
const isProduction = process.env.NODE_ENV === 'production';
// Read MANIFEST_VERSION, default to 2 if not set or not 3
const manifestVersion = process.env.MANIFEST_VERSION == 3 ? 3 : 2;

console.log(`Building for ${browser}, Manifest Version ${manifestVersion}, Mode: ${isProduction ? 'production' : 'development'}`);
// --- End Added/Modified ---

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? false : 'eval-source-map', // Use false for prod source maps if needed later, eval... is faster for dev
  entry: {
    background: './src/background/index.ts',
    popup: './src/popup/index.ts',
    content: './src/content/index.ts'
  },
  output: {
    // Output path now includes the browser name
    path: path.resolve(__dirname, 'dist', browser),
    filename: '[name].js',
    clean: true // Clean the output directory before build
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({
      // Point to the correct root tsconfig for path resolution
      configFile: '../../tsconfig.json'
    })]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader', // Ensure ts-loader is used
        exclude: /node_modules/,
        options: {
          // Point ts-loader to the correct tsconfig for the app
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
        // --- Start Modified ---
        // Conditionally copy the correct manifest and apply transformations
        {
          from: manifestVersion === 3 ? './src/manifest.v3.json' : './src/manifest.json',
          to: 'manifest.json',
          // Pass the target browser to the transform function
          transform: manifest.transform(browser),
        },
        // --- End Modified ---
        {
          from: './src/images', // Assumes images are in src/images
          to: 'images'
        }
        // Add other static assets if needed (e.g., _locales)
      ]
    })
    // Add other plugins like DefinePlugin if needed for env variables in code
  ],
  // Add target based on MV version if needed later (e.g., webworker for MV3 background)
  // target: manifestVersion === 3 && browser !== 'firefox' ? 'webworker' : 'web',
};
