import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';
import { devServer } from './webpack/dev-server';
import { getHtml } from './webpack/get-html';
import { getSourcemaps } from './webpack/get-sourcemaps';
import { loadFonts } from './webpack/load-fonts';
import { loadJs } from './webpack/load-js';
import { loadStyles } from './webpack/load-styles';
import { STATS_CONFIG } from './webpack/stats-config';

const ROOT_PATHS = {
  dist: path.join(__dirname, 'docs'),
  src: path.join(__dirname, 'src'),
};

const entryConfig = {
  entry: path.join(ROOT_PATHS.src, 'index.js'),
};

const outputConfig = {
  output: {
    filename: '[name]-[hash].js',
    path: ROOT_PATHS.dist,
    publicPath: './',
  },
};

const optimizationConfig = {
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin(), new UglifyJsPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
};

const commonConfig = merge([
  entryConfig,
  getHtml({ template: path.join(ROOT_PATHS.src, 'index.html') }),
  loadJs({
    include: ROOT_PATHS.src,
    exclude: '/node_modules/',
    options: { cacheDirectory: true },
  }),
]);

const productionConfig = merge([
  commonConfig,
  loadFonts({ options: { limit: 5000, name: 'fonts/[name]-[hash].[ext]' } }),
  loadStyles({ production: true }),
  optimizationConfig,
  outputConfig,
  STATS_CONFIG,
]);

const developmentConfig = merge([
  commonConfig,
  devServer({ host: 'localhost', port: 9090 }),
  getSourcemaps({ type: 'cheap-module-eval-source-map' }),
  loadFonts({ options: { name: '[name].[ext]' } }),
  loadStyles(),
  { output: { publicPath: '/' } },
]);

export default (mode) => {
  process.env.BABEL_ENV = mode;

  if (mode === 'production') return merge(productionConfig, { mode });
  return merge(developmentConfig, { mode });
};
