import StylelintBarePlugin from 'stylelint-bare-webpack-plugin';

export default paths => {

    return {
        plugins: [
            new StylelintBarePlugin({
                files: paths,
                configFile: '.stylelintrc'
            })
        ]
    };
};
