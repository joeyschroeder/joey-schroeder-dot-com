export default ({ include, exclude, options } = {}) => {
    
    return {
        module: {
            rules: [
                {
                    test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
                    include: include,
                    exclude,
                    use: {
                        loader: 'url-loader',
                        options
                    }
                }
            ]
        }
    };
};
