import merge from 'webpack-merge';
import path from 'path';
import { NAVIGATION_ITEMS } from './src/constants/navigation-items';
import { buildCopyFilesConfig } from './webpack/config-builders/build-copy-files-config';
import { COMPRESS_ASSETS_CONFIG } from './webpack/configs/compress-assets-config';
import { DEVELOPMENT_OUTPUT_CONFIG } from './webpack/configs/development-output-config';
import { DEVTOOL_CONFIG } from './webpack/configs/devtool-config';
import { JAVASCRIPT_LOADER_CONFIG } from './webpack/configs/javascript-loader-config';
import { OPTIMIZATION_CONFIG } from './webpack/configs/optimization-config';
import { STATS_CONFIG } from './webpack/configs/stats-config';
import { buildCleanConfig } from './webpack/config-builders/build-clean-config';
import { buildDevServerConfig } from './webpack/config-builders/build-dev-server-config';
import { buildFileLoaderConfig } from './webpack/config-builders/build-file-loader-config';
import { buildFontLoaderConfig } from './webpack/config-builders/build-font-loader-config';
import { buildHtmlConfig } from './webpack/config-builders/build-html-config';
import { buildStyleLoaderConfig } from './webpack/config-builders/build-style-loader-config';
import { POLYFILLS_CONFIG } from './webpack/configs/polyfills-config';

const ROOT_PATHS = {
  dist: path.join(__dirname, 'docs'),
  src: path.join(__dirname, 'src'),
};

const ENTRY_CONFIG = { entry: path.join(ROOT_PATHS.src, 'index.js') };

const OUTPUT_CONFIG = {
  output: {
    filename: '[name].js?v=[contenthash]',
    path: ROOT_PATHS.dist,
    publicPath: './',
  },
};

const COMMON_CONFIG = merge([
  ENTRY_CONFIG,
  JAVASCRIPT_LOADER_CONFIG,
  POLYFILLS_CONFIG,
  buildHtmlConfig({
    faviconPath: path.join(ROOT_PATHS.src, 'assets/images/favicon.png'),
    templatePath: path.join(ROOT_PATHS.src, 'templates/app-preloader.html'),
    templateParameters: {
      description:
        'Joey Schroeder is a mobile and web application developer and designer with a passion for teaching.',
      navigationItems: NAVIGATION_ITEMS,
      url: 'https://joeyschroeder.com',
      siteName: 'JoeySchroeder.com',
    },
    title: 'Joey Schroeder | Developer &amp; Designer',
  }),
]);

const DEVELOPMENT_CONFIG = merge([
  COMMON_CONFIG,
  DEVELOPMENT_OUTPUT_CONFIG,
  DEVTOOL_CONFIG,
  buildDevServerConfig(),
  buildFontLoaderConfig(),
  buildFileLoaderConfig(),
  buildStyleLoaderConfig(),
]);

const PRODUCTION_CONFIG = merge([
  COMMON_CONFIG,
  COMPRESS_ASSETS_CONFIG,
  OPTIMIZATION_CONFIG,
  OUTPUT_CONFIG,
  STATS_CONFIG,
  buildCopyFilesConfig({
    from: path.join(ROOT_PATHS.src, 'assets/images/static'),
    to: path.join(ROOT_PATHS.dist, 'static'),
  }),
  buildCopyFilesConfig({
    from: path.join(__dirname, 'CNAME'),
    to: ROOT_PATHS.dist,
  }),
  buildCleanConfig(ROOT_PATHS.dist),
  buildFontLoaderConfig({ filename: 'fonts/[name][ext]?v=[contenthash]' }),
  buildFileLoaderConfig({ filename: 'files/[name][ext]' }),
  buildStyleLoaderConfig(true),
]);

console.log('DEV CONFIG: ', JSON.stringify(DEVELOPMENT_CONFIG));

// eslint-disable-next-line import/no-unused-modules
export default ({ production = false, development = false } = {}) => {
  let mode = 'none';

  if (development) mode = 'development';
  if (production) mode = 'production';

  process.env.BABEL_ENV = mode;

  if (production) return merge(PRODUCTION_CONFIG, { mode });
  return merge(DEVELOPMENT_CONFIG, { mode });
};
