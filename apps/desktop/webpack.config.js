const mainConfigFn = require('./webpack.main');
const rendererConfigFn = require('./webpack.renderer');

module.exports = (config, context) => {
  const mainConfig = mainConfigFn(config, context);
  const rendererConfig = rendererConfigFn(config, context);
  return [mainConfig, rendererConfig];
};
