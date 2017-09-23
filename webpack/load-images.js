export default ({ include, exclude, options } = {}) => {
    
    return {
        module: {
            rules: [
                {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    include,
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
