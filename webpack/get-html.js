import HtmlWebpackPlugin from 'html-webpack-plugin';

export const getHtml = ({
  title,
  template,
  templateParameters,
  faviconPath,
}) => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        favicon: faviconPath,
        inject: true,
        minify: {
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        },
        template,
        templateParameters,
        title,
      }),
    ],
  };
};
