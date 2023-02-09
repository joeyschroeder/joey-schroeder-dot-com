import HtmlWebpackPlugin from 'html-webpack-plugin';

export const buildHtmlConfig = ({
  faviconPath,
  templatePath,
  templateParameters,
  title,
} = {}) => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        favicon: faviconPath,
        filename: 'index.html',
        inject: true,
        minify: {
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        },
        template: templatePath,
        templateParameters: { templateParameters },
        title,
      }),
    ],
  };
};
