import merge from 'webpack-merge';
import path from 'path';
import { COMPRESS_ASSETS_CONFIG } from '../configs/compress-assets-config';
import { DEVELOPMENT_OUTPUT_CONFIG } from '../configs/development-output-config';
import { DEVTOOL_CONFIG } from '../configs/devtool-config';
import { JAVASCRIPT_LOADER_CONFIG } from '../configs/javascript-loader-config';
import { OPTIMIZATION_CONFIG } from '../configs/optimization-config';
import { STATS_CONFIG } from '../configs/stats-config';
import { buildCleanConfig } from './build-clean-config';
import { buildDevServerConfig } from './build-dev-server-config';
import { buildFileLoaderConfig } from './build-file-loader-config';
import { buildFontLoaderConfig } from './build-font-loader-config';
import { buildHtmlConfig } from './build-html-config';
import { buildStyleLoaderConfig } from './build-style-loader-config';
import { POLYFILLS_CONFIG } from '../configs/polyfills-config';

const defaultHtmlTemplatePath = path.join(
  __dirname,
  '../templates/app-preloader.html'
);
const defaultFaviconPath = path.join(__dirname, '../images/favicon.png');

/**
 * A function that takes in a configuration object and returns and returns
 * a Webpack config.
 *
 * @author [Joey Schroeder](https://github.com/joeyschroeder)
 * @param {string} baseDirectory - the base directory of your project, used as the root for your Webpack entry point and output files
 * @param {string} [devServerHost] - the Webpack Dev Server host used during development mode, defaults to 'localhost'
 * @param {string} [devServerPort] - the Webpack Dev Server port used during development mode, defaults to '9090'
 * @param {Object} [devServerProxy] - an optional proxy config for Webpack Dev Server used during development mode
 * @param {Object} [developmentConfig] - an optional Webpack config to extend/override this function's development mode defaults
 * @param {string} [entryPoint] - the path to the entry point of your application, defaults to 'src/index.js'
 * @param {string} [faviconPath] - the path to an optional favicon image used during production mode
 * @param {string} [outputDirectory] - the path to your output directory, defaults to 'dist'
 * @param {string} [outputPublicPath] - an optional base path for all of your assets in your production bundle
 * @param {Object} [productionConfig] - an optional Webpack config to extend/override this function's production mode defaults
 * @param {string} [templatePath] - the path to an optional .html template
 * @param {string} [title] - the title used in your index.html <title> tag, defaults to 'Artisan Application'
 * @param {string} [version] - the value set to window.version in your index.html, defaults to 'local'
 *
 * @return {Function} a Webpack configuration
 */
export const buildWebpackConfig = ({
  baseDirectory = '',
  devServerHost = 'localhost',
  devServerPort = '9090',
  devServerProxy,
  developmentConfig = {},
  entryPoint = 'src/index.js',
  faviconPath = defaultFaviconPath,
  outputDirectory = 'dist',
  outputPublicPath = '',
  productionConfig = {},
  templatePath = defaultHtmlTemplatePath,
  title = 'Artisan Application',
  version = 'local',
} = {}) => {
  const OUTPUT_PATH = path.join(baseDirectory, outputDirectory);

  const ENTRY_CONFIG = { entry: path.join(baseDirectory, entryPoint) };

  const OUTPUT_CONFIG = {
    output: {
      filename: '[name].js?v=[contenthash]',
      path: OUTPUT_PATH,
      publicPath: path.join(outputPublicPath, '/'),
    },
  };

  const COMMON_CONFIG = merge([
    ENTRY_CONFIG,
    JAVASCRIPT_LOADER_CONFIG,
    POLYFILLS_CONFIG,
    buildHtmlConfig({ faviconPath, templatePath, title, version }),
  ]);

  const DEVELOPMENT_CONFIG = merge([
    COMMON_CONFIG,
    DEVELOPMENT_OUTPUT_CONFIG,
    DEVTOOL_CONFIG,
    buildDevServerConfig({
      baseDirectory,
      host: devServerHost,
      port: devServerPort,
      proxy: devServerProxy,
    }),
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
    buildCleanConfig(OUTPUT_PATH),
    buildFontLoaderConfig({ filename: 'fonts/[name][ext]?v=[contenthash]' }),
    buildFileLoaderConfig({ filename: 'files/[name][ext]' }),
    buildStyleLoaderConfig(true),
  ]);

  return ({ production = false, development = false } = {}) => {
    let mode = 'none';

    if (development) mode = 'development';
    if (production) mode = 'production';

    process.env.BABEL_ENV = mode;

    if (production) return merge(PRODUCTION_CONFIG, productionConfig, { mode });
    return merge(DEVELOPMENT_CONFIG, developmentConfig, { mode });
  };
};
