import HtmlWebpackPlugin from 'html-webpack-plugin';

export const getHtml = ({ title, template, templateParameters }) => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template,
        templateParameters,
        title,
        minify: {
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        },
      }),
    ],
  };
};
