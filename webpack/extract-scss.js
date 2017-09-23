import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleExtHtmlWebpackPlugin from 'style-ext-html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import webpack from 'webpack';

export default paths => {
    const criticalCSS = new ExtractTextPlugin('critical.css');
    const externalCSS = new ExtractTextPlugin('[name].[contenthash].css');

    return {
        module: {
            rules: [
                {
                    test: /critical.scss$/,
                    use: criticalCSS.extract({
                        fallback: 'style-loader',
                        use: 'css-loader!postcss-loader!sass-loader'
                    }),
                    include: paths
                },
                {
                    test: /index.scss$/,
                    use: externalCSS.extract({
                        fallback: 'style-loader',
                        use: 'css-loader!postcss-loader!sass-loader'
                    }),
                    include: paths
                }
            ]
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                options: {
                    context: __dirname,
                    // PostCSS plugins go here. Note the wrapping! It is
                    // required for hot loading to work. PostCSS will work
                    // without too, but this is the preferred way.
                    postcss: function() {
                        return [
                            autoprefixer({ browsers: [ 'last 3 versions'] }),
                            precss
                        ];
                    }
                }
            }),
            criticalCSS,
            externalCSS,
            // Inline all the critical CSS in index.html
            new StyleExtHtmlWebpackPlugin('critical.css')
        ]
    };
};
