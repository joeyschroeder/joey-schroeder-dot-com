import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

/* Optimizing the CSS and JS files. */
export const OPTIMIZATION_CONFIG = {
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()],
    moduleIds: 'named',
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
