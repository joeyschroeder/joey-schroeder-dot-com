import HtmlWebpackPlugin from 'html-webpack-plugin';

export default ({title, template}) => {
    
    return {
        plugins: [
            new HtmlWebpackPlugin({
                title: title,
                template: template,
                minify: {
                    collapseInlineTagWhitespace: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true
                }
            })
        ]
    };
};
