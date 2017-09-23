import CopyWebpackPlugin from 'copy-webpack-plugin';

export default ({sourcePath, destPath}) => {
    
    return {
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: {
                        glob: `${sourcePath}/**/*`,
                        dot: true
                    },
                    to: destPath
                }
            ])
        ]
    };
};
